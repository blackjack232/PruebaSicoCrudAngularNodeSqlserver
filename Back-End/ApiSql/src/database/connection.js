import sql from 'mssql';

const dbSettings = {
    user: "sa",
    password: "1234",
    server: "localhost",
    database: "bdpruebatecnica",
   
    options:{
        encrypt : true,
        trustServerCertificate : true

    },
};

export async function getConnection() {
   try {
    const pool = await sql.connect(dbSettings);
    return pool;
   
   } catch (error) {
       console.log('Error de conexion',error)
   }

}

