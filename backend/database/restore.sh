#!/bin/bash

# Set backup directory
BACKUP_DIR="./db_backups"

# Find latest backup file
LATEST_BACKUP=$(ls -t $BACKUP_DIR/full_backup_*.sql 2>/dev/null | head -n1)

# Check if backup exists
if [ -z "$LATEST_BACKUP" ]; then
    echo "No backup files found in $BACKUP_DIR"
    exit 1
fi

echo "Restoring from: $LATEST_BACKUP"

# Restore database
psql -U csi_user -h localhost csi_db < "$LATEST_BACKUP"

if [ $? -eq 0 ]; then
    echo "Database restored successfully"
else
    echo "Error restoring database"
    exit 1
fi