

describe('drag and drops',()=>{

    it('double click',()=>{

        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').dblclick().should('have.class','div-double-click double')

        

    })
    it('alert and get text',()=>{

        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1 > p').click()

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am an alert box!')
        })
        

    })
    it('drag and drop test',()=>{
        //copy installation from here  https://github.com/4teamwork/cypress-drag-drop

        //cy.visit('https://webdriveruniversity.com/Actions/index.html')
        //cy.get('#draggable > p > b').drag('#droppable > p')
        //cy.get('#draggable').trigger('mousedown',{ which: 1, pageX: 600, pageY: 100 }).
        //trigger('mousemove',{ which: 1, pageX: 600, pageY: 400 })
        //.trigger('mouseup')

        cy.visit('https://www.w3schools.com/html/html5_draganddrop.asp')
        cy.get('#accept-choices').click()
        cy.wait(2000)
        cy.get('#drag1').drag('#div2')

        //cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        //cy.get('#column-a').drag('#column-b')
        
        

    })
    it.only('drag and drop test',()=>{
        

        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        const dataTransfer=new DataTransfer();
        cy.get('#draggable').trigger('dragstart',{
            dataTransfer
        })
        cy.get('#droppable').trigger('drop',{
            dataTransfer
        })

    })

})