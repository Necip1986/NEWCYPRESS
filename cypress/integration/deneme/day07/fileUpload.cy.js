describe("file upload",()=>{

    it('file upload test',()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile('Image 1.jpeg')
        cy.get('#fileList > li').should('contain.text','Image 1')

        cy.screenshot();

    })
    it.only('Multiple file upload test',()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload')
        //.attachFile('Image 1.jpeg')//previous will override the previous file
        //.attachFile('Image 2.jpeg')
        .attachFile(['Image 1.jpeg','Image 2.jpeg']) //this will upload all files
        
        //cy.get('#fileList > li').should('contain.text','Image 2')
        //cy.screenshot();
        cy.get('#fileList > li').should('be.visible')

    })
        it('OverWrite file name',()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').
        attachFile({filePath:'Image 1.jpeg',fileName:'CustomFileName'})
   
        
        cy.get('#fileList > li').should('contain.text','Imge 2')
        cy.screenshot();
        cy.get('#fileList > li').should('be.visible')

    })
})