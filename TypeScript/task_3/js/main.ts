/// <reference path="crud.d.ts" />
import { RowID, RowElement } from './interface';

// Simuler les fonctions CRUD en ajoutant des implémentations
const CRUD = {
    insertRow: (row: RowElement): RowID => {
        console.log('Insert row', row);
        return Math.floor(Math.random() * 1000); // Simuler l'ID
    },
    deleteRow: (rowId: RowID): void => {
        console.log('Delete row id', rowId);
    },
    updateRow: (rowId: RowID, row: RowElement): RowID => {
        console.log(`Update row ${rowId}`, row);
        return rowId;
    },
};

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);
