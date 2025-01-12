#!/bin/bash

BACKUP_DIR="./db_backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR

# Full backup
pg_dump -U csi_user -h localhost csi_db > "$BACKUP_DIR/full_backup_$TIMESTAMP.sql"

echo "Backup completed: $BACKUP_DIR"