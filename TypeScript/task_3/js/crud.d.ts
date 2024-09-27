import { RowID, RowElement } from './interface';

// Déclaration des fonctions CRUD
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
