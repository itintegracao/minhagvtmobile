var webSql = {
    dbname: "websql",
    store: function (db, key, value, type) {
        type = type || "text";
        db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS websql (id integer primary key)', [], function (tx) {
                console.log("Table websql created");
                tx.executeSql('SELECT ' + key + ' from websql', [], function (tx) {
                    console.log('Column ' + key + ' already exists. Skipping');
                    tx.executeSql('UPDATE websql SET ' + key + ' = ?', [value], function (tx, res) {
                        console.log('Update successful of ' + key + " to " + value);
                        console.log(JSON.stringify(res));
                    }, function (tx, err) {
                        console.log(JSON.stringify(err));
                    });
                }, function (tx, errs) {
                    console.log(JSON.stringify(errs));
                    console.log('Creating field ' + 'ALTER TABLE websql ADD COLUMN ' + key + ' ' + type);
                    db.transaction(function (tx) {
                        tx.executeSql('ALTER TABLE websql ADD COLUMN ' + key + ' ' + type, [], function (tx) {
                            db.transaction(function (tx) {
                                tx.executeSql('INSERT INTO websql (' + key + ') values (?)', [value], null, function (tx, er) {
                                    console.log(JSON.stringify(er));
                                });
                            });
                        }, function (tx, err) {
                            console.log(JSON.stringify(err));
                        });
                    });
                });
            }, function (tx, error) {
                console.log("Table websql NOT created");
                console.log(JSON.stringify(error));
            });
        });
    },
    get: function (db, keys, handler, erroHandler) {
        db.transaction(function (tx) {     
            tx.executeSql('SELECT * from websql', [], function (tx, res) {
                console.log(JSON.stringify(res));
                handler.apply(this, [res.rows.item(0)]);
            }, function (tx, err) {                
                console.log(JSON.stringify(err));
                if (erroHandler) {
                    erroHandler.apply(this, err);
                }
            });
        });
    }
};