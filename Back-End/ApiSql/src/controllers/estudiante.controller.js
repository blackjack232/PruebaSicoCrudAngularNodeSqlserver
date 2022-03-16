
import { getConnection, queries } from '../database';
import sql from 'mssql';

export const getAllEstudianteById = async (req, res) => {


    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input("Id", id)
            .query(queries.getAllEstudianteById);

        console.log('este es la dat', result)

        res.json(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const deleteEstudiante = async (req, res) => {


    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
            .input("Id", id)
            .query(queries.deleteEstudiante);

        console.log('este es la dat de delete', req.params)

        res.status(204)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const getAllEstudiante = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllEstudiante)
        console.log('este es la dat', result)

        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}


export const updateEstudiante = async (req, res) => {
    const { TipoIdentificacion, Identificacion, Nombre1, Nombre2, Apellido1, Apellido2,
        Email, Celular, Direccion, Ciudad } = req.body;

    const { id } = req.params;

    if (TipoIdentificacion == null || Identificacion == null || Nombre1 == null || Nombre2 == null ||
        Apellido1 == null || Apellido2 == null ||
        Email == null || Celular == null || Direccion == null || Ciudad == null) {
        return res.status(400).json({ mssg: 'LLene todos los datos' })

    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("TipoIdentificacion", sql.VarChar, TipoIdentificacion)
            .input("Identificacion", sql.VarChar, Identificacion)
            .input("Nombre1", sql.VarChar, Nombre1)
            .input("Nombre2", sql.VarChar, Nombre2)
            .input("Apellido1", sql.VarChar, Apellido1)
            .input("Apellido2", sql.VarChar, Apellido2)
            .input("Email", sql.VarChar, Email)
            .input("Celular", sql.VarChar, Celular)
            .input("Direccion", sql.VarChar, Direccion)
            .input("Ciudad", sql.VarChar, Ciudad)
            .input("id",sql.Int, id)
            .query(queries.updateEstudiante);
        console.log('este es la dat', result)

        // res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const createEstudiante = async (req, res) => {

    const { TipoIdentificacion, Identificacion, Nombre1, Nombre2, Apellido1, Apellido2,
        Email, Celular, Direccion, Ciudad } = req.body;
        console.log('Esta es la identificacion',req.body);

    if (TipoIdentificacion === null || Identificacion === null || Nombre1 === null || Nombre2 === null ||
        Apellido1 === null || Apellido2 === null ||
        Email === null || Celular === null || Direccion === null || Ciudad === null) {
        return res.status(400).json({ mssg: 'LLene todos los datos' })

    }
    try {
        const pool = await getConnection();
        await pool.request()
            .input("TipoIdentificacion", sql.VarChar, TipoIdentificacion)
            .input("Identificacion", sql.VarChar, Identificacion)
            .input("Nombre1", sql.VarChar, Nombre1)
            .input("Nombre2", sql.VarChar, Nombre2)
            .input("Apellido1", sql.VarChar, Apellido1)
            .input("Apellido2", sql.VarChar, Apellido2)
            .input("Email", sql.VarChar, Email)
            .input("Celular", sql.VarChar, Celular)
            .input("Direccion", sql.VarChar, Direccion)
            .input("Ciudad", sql.VarChar, Ciudad)
            .query(queries.createEstudiante)

        res.json({TipoIdentificacion, Identificacion, Nombre1, Nombre2, Apellido1, Apellido2,
            Email, Celular, Direccion, Ciudad})

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}