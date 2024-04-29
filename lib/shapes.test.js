const {Shape, Triangle, Square, Circle} = require('./shapes')

describe('Shape', () => {
    it('should set the color of the shape', () => {
        const shape = new Shape()
        shape.setColor('green')
        expect(shape.color).toEqual('green')
    })
})

describe('Triangle', () => {
    it('should set the color of the shape', () => {
        const shape = new Triangle('blue') 
        shape.setColor("blue")
        expect(shape.render()).toEqual(`<polygon points="150,50 50,150 250,150" fill= "blue" />`)
        })
})
describe('Square', () => {
    it('should set the color of the shape', () => {
        const shape = new Square('blue') 
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="blue" />`)
    })
})

describe('Circle', () => {
    it('should set the color of the shape', () => {
        const shape = new Circle('blue')
        shape.setColor("blue")
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`)
    })
})