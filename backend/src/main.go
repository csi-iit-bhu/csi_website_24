package main

import (
    "encoding/json"
    "log"
    "net/http"
    "github.com/gorilla/mux"
    "github.com/rs/cors"
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

type Member struct {
    ID       uint   `json:"id"`
    Name     string `json:"name"`
    Position string `json:"position"`
    Email    string `json:"email"`
    Year     int    `json:"year"`
}

type Event struct {
    ID          uint   `json:"id"`
    Title       string `json:"title"`
    Description string `json:"description"`
    Date        string `json:"date"`
    Location    string `json:"location"`
}

type Club struct {
    ID          uint   `json:"id"`
    Name        string `json:"name"`
    Description string `json:"description"`
    Contact     string `json:"contact"`
}

type Vertical struct {
    ID          uint   `json:"id"`
    Name        string `json:"name"`
    Description string `json:"description"`
}

type Project struct {
    ID          uint   `json:"id"`
    Name        string `json:"name"`
    Description string `json:"description"`
    Status      string `json:"status"`
    Team        []Member `json:"team" gorm:"many2many:project_members;"`
}

var db *gorm.DB

func init() {
	dsn := "host=localhost user=csi_user password=sustainibility dbname=csi_db port=5432 sslmode=disable"
    var err error
    db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatal(err)
    }
    
    // Auto Migrate the schemas
    db.AutoMigrate(&Member{}, &Event{}, &Club{}, &Vertical{}, &Project{})
}

// Handlers
func getMembers(w http.ResponseWriter, r *http.Request) {
    var members []Member
    db.Find(&members)
    json.NewEncoder(w).Encode(members)
}

func getEvents(w http.ResponseWriter, r *http.Request) {
    var events []Event
    db.Find(&events)
    json.NewEncoder(w).Encode(events)
}

func getClubInfo(w http.ResponseWriter, r *http.Request) {
    var clubs []Club
    db.Find(&clubs)
    json.NewEncoder(w).Encode(clubs)
}

func getVerticals(w http.ResponseWriter, r *http.Request) {
    var verticals []Vertical
    db.Find(&verticals)
    json.NewEncoder(w).Encode(verticals)
}

func getProjects(w http.ResponseWriter, r *http.Request) {
    var projects []Project
    db.Preload("Team").Find(&projects)
    json.NewEncoder(w).Encode(projects)
}

func main() {
    router := mux.NewRouter()

    // Routes
    router.HandleFunc("/members", getMembers).Methods("GET")
    router.HandleFunc("/events", getEvents).Methods("GET")
    router.HandleFunc("/club", getClubInfo).Methods("GET")
    router.HandleFunc("/verticals", getVerticals).Methods("GET")
    router.HandleFunc("/projects", getProjects).Methods("GET")

    // CORS
    c := cors.New(cors.Options{
        AllowedOrigins: []string{"*"},
        AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
        AllowedHeaders: []string{"*"},
    })

    // Start server
    handler := c.Handler(router)
    log.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", handler))
}