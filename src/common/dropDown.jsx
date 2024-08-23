import React from 'react';
import './dots.css'; // Ensure you have the CSS styles from the example included

export const DropDownMenu = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">

            <h3 className="junk">Dropdown select <br /> <small>(Contact for further information)</small></h3>

            <hr />
            <div className='border-y-2 border-white pt-9'>
                <div className="a_1">
                    {/* Explicit Labeling */}
                    <nav role="select">
                        <input id="s_con_a" type="radio" name="s_a" className="con" value="null" />
                        <input id="s_exp_a" type="radio" name="s_a" className="exp" />
                        <label htmlFor="s_con_a" className="cl"></label>
                        <span className="lst">
                            <input id="s_a_a" type="radio" name="s_a" value="maj" checked />
                            <label htmlFor="s_a_a" data-value="Art"></label>
                            <input id="s_a_b" type="radio" name="s_a" value="min" />
                            <label htmlFor="s_a_b" data-value="Instagram"></label>
                            <label className="ph" data-value="Art"></label>
                        </span>
                        <label htmlFor="s_exp_a" className="el"></label>
                    </nav>

                    {/* Implicit Labeling */}
                    <nav role="select" className="imp">
                        <input id="s_con_b" type="radio" name="s_b" className="con" value="null" />
                        <input id="s_exp_b" type="radio" name="s_b" className="exp" />
                        <label htmlFor="s_con_b" className="cl"></label>
                        <span className="lst">
                            <label data-value="Tuanis Surf School"><input type="radio" name="s_b" value="maj" /></label>
                            <label data-value="Belly Belly Bread"><input type="radio" name="s_b" value="min" /></label>
                            <label data-value="Websites"><input type="radio" name="s_b" value="pch" checked /></label>
                            <label data-value="Label"><input type="radio" name="s_b" value="lbl" /></label>
                            <label className="ph" data-value="Implicit"></label>
                        </span>
                        <label htmlFor="s_exp_b" className="el"></label>
                    </nav>
                </div>
            </div>
            <hr />

            <hr />
            <span className="describe junk">
                <ul>
                    <li>contact: robertiniisa@gmail.com</li>

                </ul>
            </span>
        </div>
    );
};