import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="container border-t-4 border-fuchsia-500">
                <div className="text-white flex flex-col  items-center text-center md:flex-row md:items-start md:text-left md:justify-evenly md:w-11/12 md:m-auto">
<div ><p className="font-bold mt-10 text-fuchsia-500">Address:</p>
<ul className="">
<li>Lorem ipsum dolor sit. </li>
<li>Lorem ipsum dolor sit. </li>
<li>Lorem ipsum dolor sit. </li>


</ul>
</div>

<div><p className="font-bold  text-fuchsia-500 mt-10">Social Media:</p>
<ul>
<li>Lorem ipsum dolor sit. </li>
<li>Lorem ipsum dolor sit. </li>
<li>Lorem ipsum dolor sit. </li>


</ul>
</div>

<div><p className="font-bold  text-fuchsia-500 mt-10">Useful Links:</p>
<ul>
<li>Lorem ipsum dolor sit. </li>
<li>Lorem ipsum dolor sit. </li>
<li>Lorem ipsum dolor sit. </li>


</ul>
</div>
               </div>
            </div>
        </div>
    );
}

export default Footer;
