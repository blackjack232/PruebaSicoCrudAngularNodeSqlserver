export const queries = {
    getAllEstudiante:'SELECT * FROM Estudiante', 
    getAllEstudianteById:'SELECT * FROM Estudiante WHERE Id = @Id', 
    deleteEstudiante : 'DELETE FROM Estudiante WHERE  Id= @Identificacion',
    updateEstudiante:'UPDATE  Estudiante SET TipoIdentificacion = @TipoIdentificacion, Identificacion = @Identificacion,Nombre1 = @Nombre1,Nombre2 = @Nombre2,Apellido1 = @Apellido1, Apellido2 =@Apellido2,Email = @Email, Celular = @Celular,  Direccion = @Direccion,Ciudad = @Ciudad WHERE Id = @Id ',
    createEstudiante : 'INSERT INTO Estudiante (TipoIdentificacion,Identificacion,Nombre1,Nombre2,Apellido1,Apellido2,Email,Celular,Direccion,Ciudad) VALUES (@TipoIdentificacion,@Identificacion,@Nombre1,@Nombre2,@Apellido1,@Apellido2,@Email,@Celular,@Direccion,@Ciudad)'
}