import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

const NotificationToggle = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <div ref={target} onClick={() => setShow(!show)}>
                <i className="fa-regular fa-bell"></i>
            </div>
            <Overlay target={target.current} show={show} placement="left">
                {(props) => (
                    <Tooltip id="overlay-example " className='bg-white' {...props}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facilis dolores suscipit tempora impedit? Minima eum sint impedit laudantium! Maiores quod tempore voluptates deserunt deleniti provident iure atque incidunt corporis at quam quis, ut porro laboriosam a. Delectus, eveniet temporibus minima alias enim voluptas harum architecto, quo assumenda sapiente voluptates.
                    </Tooltip>
                )}
            </Overlay>
        </>
    );
}

export default NotificationToggle;