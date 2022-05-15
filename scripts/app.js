import * as model from './model.js'
import { Element } from './classes.js'

const page = document.querySelector('.page')
const gallery = new Element(page, model.gallery, 'afterbegin')

gallery.render()

const slides = document.querySelectorAll('.gallery-slide')

Element.addActiveClass('click', slides)