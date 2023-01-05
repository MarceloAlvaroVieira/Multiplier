const { Categoria, sequelize } = require('../../src/app/models')



describe('Database comunication', () =>{
    it('Create a \'Categoria\'', async () => {
        const categoria = await Categoria.create({codigo: 1, titulo: 'teste', status: true})
        expect(categoria.codigo).toBe(1);
    });

    it('Read a \'Categoria\'', async () => {
        const categoria = await Categoria.findOne({
            where: {id: 1}
        })
        expect(
            parseInt(categoria.codigo)
        ).toBe(1);
    });

    it('Update a \'Categoria\'', async () => {
        const categoria = await Categoria.update({
            titulo: 'titulo 02'
        },{
            where: {id: 1}
        })

        expect(
            parseInt(categoria)
        ).toBe(1);
    });
    
    it('Delete a \'Categoria\'', async () => {
        const categoria = await Categoria.destroy({
            where: {id: 1}
        })
        expect(
            parseInt(categoria)
        ).toBe(1);
    });

    // it('Truncate Database', async () => {
    //     const categoria = await Categoria.destroy({
    //         truncate: true
    //     })

    //     console.log(categoria);

    //     expect(
    //         praseInt(categoria)
    //     ).toBe(1)
    // })
})
