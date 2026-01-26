#!/bin/bash

# Script to migrate tips from the Lenny Project Working Files to the website
# Usage: ./scripts/migrate-tips.sh

SOURCE_DIR="/Users/andreasduess/Claude/Projects/Fifty Plus/Lennys podcast wisdom/Lenny Project Working Files/tips"
DEST_DIR="/Users/andreasduess/Developer/fifty-plus/src/content/podcast-wisdom"

if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Source directory not found: $SOURCE_DIR"
    exit 1
fi

if [ ! -d "$DEST_DIR" ]; then
    echo "Error: Destination directory not found: $DEST_DIR"
    exit 1
fi

# Count files to migrate
FILE_COUNT=$(find "$SOURCE_DIR" -name "*.md" -type f | wc -l | tr -d ' ')

if [ "$FILE_COUNT" -eq 0 ]; then
    echo "No .md files found in $SOURCE_DIR"
    exit 0
fi

echo "Found $FILE_COUNT tip files to migrate"
echo "Copying from: $SOURCE_DIR"
echo "To: $DEST_DIR"
echo ""

# Copy all .md files
cp "$SOURCE_DIR"/*.md "$DEST_DIR/" 2>/dev/null

COPIED=$?

if [ $COPIED -eq 0 ]; then
    echo "✓ Successfully migrated $FILE_COUNT tips"
    echo ""
    echo "Next steps:"
    echo "1. Review the tips in $DEST_DIR"
    echo "2. Run 'npm run build' to verify everything works"
    echo "3. Run 'npm run dev' to preview locally at http://localhost:4321/podcast-wisdom"
else
    echo "✗ Error copying files"
    exit 1
fi
