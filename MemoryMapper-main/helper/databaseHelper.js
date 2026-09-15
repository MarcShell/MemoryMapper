import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("mydatabase.db");

// CREATE
const initDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS memories (id INTEGER, title TEXT NOT NULL, imagePath TEXT, location TEXT NOT NULL, rating INTEGER NOT NULL, comment TEXT, PRIMARY KEY (id AUTOINCREMENT));",
      [],
      (_, result) => {
        if (result.rowsAffected > 0) {
          console.log("Table created successfully");
        }
      },
      (error) => {
        console.error("Error creating table:", error);
      }
    );
  });
};

// SELECT
const getAllItems = (callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM memories;",
      [],
      (_, { rows }) => {
        const memories = rows._array;
        callback(memories);
      },
      (error) => {
        console.error("Error getting memories:", error);
      }
    );
  });
};

// INSERT
const insertMemory = (title, imagePath, location, rating, comment) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO memories (title, imagePath, location, rating, comment) VALUES (?, ?, ?, ?, ?);",
      [title, imagePath, location, rating, comment],
      (_, result) => {
        console.log(
          "Memory inserted successfully. Memory ID:",
          result.insertId
        );
      },
      (error) => {
        console.error("Error inserting memory:", error);
      }
    );
  });
};

// Insert 5 dummy data rows if the table is empty
const insertDummyDataIfNeeded = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT COUNT(*) as count FROM memories;",
      [],
      (_, result) => {
        const count = result.rows.item(0).count;
        if (count === 0) {
          const dummyData = [
            {
              title: "Brandenburg Gate",
              imagePath: null,
              location: "52.5163, 13.3777", // Berlin, Germany
              rating: 5,
              comment: "A historic monument in Berlin.",
            },
            {
              title: "Neuschwanstein Castle",
              imagePath: null,
              location: "47.5576, 10.7498", // Bavaria, Germany
              rating: 4,
              comment: "A fairytale castle in Bavaria.",
            },
            {
              title: "Cologne Cathedral",
              imagePath: null,
              location: "50.9413, 6.958", // Cologne, Germany
              rating: 5,
              comment: "A stunning Gothic cathedral in Cologne.",
            },
            {
              title: "Frankfurt Cathedral",
              imagePath: null,
              location: "50.1109, 8.6821", // Frankfurt, Germany
              rating: 4,
              comment: "A beautiful cathedral in Frankfurt.",
            },
            {
              title: "Hamburg Harbor",
              imagePath: null,
              location: "53.5459, 9.9666", // Hamburg, Germany
              rating: 5,
              comment: "Famous harbor in Hamburg.",
            },
          ];

          dummyData.forEach((data) => {
            insertMemory(
              data.title,
              data.imagePath,
              data.location,
              data.rating,
              data.comment
            );
          });

          console.log("Inserted dummy data.");
        }
      },
      (error) => {
        console.error("Error checking table data:", error);
      }
    );
  });
};

// UPDATE
const updateMemoryById = (id, title, imagePath, location, rating, comment) => {
  db.transaction((tx) => {
    tx.executeSql(
      "UPDATE memories SET title = ?, imagePath = ?, location = ?, rating = ?, comment = ? WHERE id = ?",
      [title, imagePath, location, rating, comment, id],
      (_) => {
        console.log("Memory updated successfully. Memory ID:", id);
      },
      (error) => {
        console.error("Error updating memory:", error);
      }
    );
  });
};

// DELETE
const deleteMemoryById = (memoryId) => {
  db.transaction((tx) => {
    tx.executeSql(
      "DELETE FROM memories WHERE id = ?;",
      [memoryId],
      (_) => {
        console.log("Memory deleted successfully");
      },
      (error) => {
        console.error("Error deleting memory:", error);
      }
    );
  });
};

// EMPTY TABLE
const emptyTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "DELETE FROM memories;",
      [],
      () => {
        console.log("All rows deleted successfully");
      },
      (error) => {
        console.error("Error deleting rows:", error);
      }
    );
  });
};

// DELETE TABLE
const deleteTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "DROP TABLE IF EXISTS memories;",
      [],
      () => {
        console.log("Table deleted successfully");
      },
      (error) => {
        console.error("Error deleting table:", error);
      }
    );
  });
};

// Show tables
const displayAllTables = () => {
  db.transaction((tx) => {
    // Query to retrieve all table names
    tx.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table';",
      [],
      (_, { rows }) => {
        const tableNames = rows._array.map((row) => row.name);
        console.log("Tables:", tableNames);
      },
      (error) => {
        console.error("Error getting tables:", error);
      }
    );
  });
};

export {
  initDatabase,
  insertMemory,
  deleteMemoryById,
  getAllItems,
  emptyTable,
  deleteTable,
  displayAllTables,
  updateMemoryById,
  insertDummyDataIfNeeded,
};
