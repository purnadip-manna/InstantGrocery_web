import React, { Component } from 'react'

export default class categories extends Component {
    render() {
        return (
            <div className="container-fluid ml-0 pl-4 mr-0 pl-0 pr-4 pt-2 pb-2 mt-1 mb-1">
                    <div className="row justify-content-center">
                        <div className="justify-content-center align-items-center">
                            <h2>Catagories</h2>
                        </div>
                    </div>
                    <span class="badge badge-secondary cat">Atta</span>
                    <span class="badge badge-secondary cat">Maida</span>
                    <span class="badge badge-secondary cat">Sugar</span>
                    <span class="badge badge-secondary cat">Biscuit</span>
                    <span class="badge badge-secondary cat">Noodles</span>

                    <hr />
            </div>
        )
    }
}
