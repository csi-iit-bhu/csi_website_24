--
-- PostgreSQL database dump
--

-- Dumped from database version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: clubs; Type: TABLE; Schema: public; Owner: csi_user
--

CREATE TABLE public.clubs (
    id bigint NOT NULL,
    name text,
    description text,
    contact text
);


ALTER TABLE public.clubs OWNER TO csi_user;

--
-- Name: clubs_id_seq; Type: SEQUENCE; Schema: public; Owner: csi_user
--

CREATE SEQUENCE public.clubs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clubs_id_seq OWNER TO csi_user;

--
-- Name: clubs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: csi_user
--

ALTER SEQUENCE public.clubs_id_seq OWNED BY public.clubs.id;


--
-- Name: events; Type: TABLE; Schema: public; Owner: csi_user
--

CREATE TABLE public.events (
    id bigint NOT NULL,
    title text,
    description text,
    date text,
    location text
);


ALTER TABLE public.events OWNER TO csi_user;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: csi_user
--

CREATE SEQUENCE public.events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_id_seq OWNER TO csi_user;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: csi_user
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: members; Type: TABLE; Schema: public; Owner: csi_user
--

CREATE TABLE public.members (
    id bigint NOT NULL,
    name text,
    "position" text,
    email text,
    year bigint
);


ALTER TABLE public.members OWNER TO csi_user;

--
-- Name: members_id_seq; Type: SEQUENCE; Schema: public; Owner: csi_user
--

CREATE SEQUENCE public.members_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.members_id_seq OWNER TO csi_user;

--
-- Name: members_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: csi_user
--

ALTER SEQUENCE public.members_id_seq OWNED BY public.members.id;


--
-- Name: project_members; Type: TABLE; Schema: public; Owner: csi_user
--

CREATE TABLE public.project_members (
    project_id bigint NOT NULL,
    member_id bigint NOT NULL
);


ALTER TABLE public.project_members OWNER TO csi_user;

--
-- Name: projects; Type: TABLE; Schema: public; Owner: csi_user
--

CREATE TABLE public.projects (
    id bigint NOT NULL,
    name text,
    description text,
    status text
);


ALTER TABLE public.projects OWNER TO csi_user;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: csi_user
--

CREATE SEQUENCE public.projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.projects_id_seq OWNER TO csi_user;

--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: csi_user
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: verticals; Type: TABLE; Schema: public; Owner: csi_user
--

CREATE TABLE public.verticals (
    id bigint NOT NULL,
    name text,
    description text
);


ALTER TABLE public.verticals OWNER TO csi_user;

--
-- Name: verticals_id_seq; Type: SEQUENCE; Schema: public; Owner: csi_user
--

CREATE SEQUENCE public.verticals_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.verticals_id_seq OWNER TO csi_user;

--
-- Name: verticals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: csi_user
--

ALTER SEQUENCE public.verticals_id_seq OWNED BY public.verticals.id;


--
-- Name: clubs id; Type: DEFAULT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.clubs ALTER COLUMN id SET DEFAULT nextval('public.clubs_id_seq'::regclass);


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Name: members id; Type: DEFAULT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.members ALTER COLUMN id SET DEFAULT nextval('public.members_id_seq'::regclass);


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Name: verticals id; Type: DEFAULT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.verticals ALTER COLUMN id SET DEFAULT nextval('public.verticals_id_seq'::regclass);


--
-- Data for Name: clubs; Type: TABLE DATA; Schema: public; Owner: csi_user
--

COPY public.clubs (id, name, description, contact) FROM stdin;
\.


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: csi_user
--

COPY public.events (id, title, description, date, location) FROM stdin;
\.


--
-- Data for Name: members; Type: TABLE DATA; Schema: public; Owner: csi_user
--

COPY public.members (id, name, "position", email, year) FROM stdin;
\.


--
-- Data for Name: project_members; Type: TABLE DATA; Schema: public; Owner: csi_user
--

COPY public.project_members (project_id, member_id) FROM stdin;
\.


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: csi_user
--

COPY public.projects (id, name, description, status) FROM stdin;
\.


--
-- Data for Name: verticals; Type: TABLE DATA; Schema: public; Owner: csi_user
--

COPY public.verticals (id, name, description) FROM stdin;
\.


--
-- Name: clubs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: csi_user
--

SELECT pg_catalog.setval('public.clubs_id_seq', 1, false);


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: csi_user
--

SELECT pg_catalog.setval('public.events_id_seq', 1, false);


--
-- Name: members_id_seq; Type: SEQUENCE SET; Schema: public; Owner: csi_user
--

SELECT pg_catalog.setval('public.members_id_seq', 1, false);


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: csi_user
--

SELECT pg_catalog.setval('public.projects_id_seq', 1, false);


--
-- Name: verticals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: csi_user
--

SELECT pg_catalog.setval('public.verticals_id_seq', 1, false);


--
-- Name: clubs clubs_pkey; Type: CONSTRAINT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.clubs
    ADD CONSTRAINT clubs_pkey PRIMARY KEY (id);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: members members_pkey; Type: CONSTRAINT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_pkey PRIMARY KEY (id);


--
-- Name: project_members project_members_pkey; Type: CONSTRAINT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.project_members
    ADD CONSTRAINT project_members_pkey PRIMARY KEY (project_id, member_id);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: verticals verticals_pkey; Type: CONSTRAINT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.verticals
    ADD CONSTRAINT verticals_pkey PRIMARY KEY (id);


--
-- Name: project_members fk_project_members_member; Type: FK CONSTRAINT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.project_members
    ADD CONSTRAINT fk_project_members_member FOREIGN KEY (member_id) REFERENCES public.members(id);


--
-- Name: project_members fk_project_members_project; Type: FK CONSTRAINT; Schema: public; Owner: csi_user
--

ALTER TABLE ONLY public.project_members
    ADD CONSTRAINT fk_project_members_project FOREIGN KEY (project_id) REFERENCES public.projects(id);


--
-- PostgreSQL database dump complete
--

