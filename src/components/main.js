import React from 'react';
import Item from './Item'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Carousels extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    generateItems() {
        var items = []
        var level
        for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            // Wrap each Item in a CSSTransition so TransitionGroup can animate them.
            items.push(
                <CSSTransition
                    key={index}
                    timeout={300}
                    classNames={this.state.direction || 'slide'}
                >
                    <Item id={this.state.items[index]} level={level} />
                </CSSTransition>
            )
        }
        return items
    }
    
    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }
    
    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }
    
    render() {
        return(
            
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left" style={{color:"black"}}></i></div>
                <TransitionGroup className="carousel-items">
                    {this.generateItems()}
                </TransitionGroup>
                <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
            </div>
        )
    }
}

export default Carousels;