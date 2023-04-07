import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';



function Cards() {
    const [run , setRun] = useState(19)
    let handleSideslipR = () => {
        if (run > 0) {
            
            setRun(run - 18.5)
        }
    };

    let handleSideslipL = () => {
        if (run < 80) {
            
            setRun(run + 18.5)
        }
        
    }
    return (
        <div style={{ margin: '0px 10px', overflow: 'hidden' }}>

            <div className='btnss'>
                <div className='btnss-right' onClick={handleSideslipR}>
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div className='btnss-left' onClick={handleSideslipL}>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>

            <div style={{ display: 'flex', transform: `translateX(-${run}rem)`, transition: 'all 0.3s linear', }}>
                <div style={{ margin: '0px 5px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../img/card 1.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ margin: '0px 5px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../img/card 1.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ margin: '0px 5px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../img/card 1.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ margin: '0px 5px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../img/card 1.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ margin: '0px 5px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../img/card 1.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ margin: '0px 5px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../img/card 1.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ margin: '0px 5px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../img/card 1.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ margin: '0px 5px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../img/card 1.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{ margin: '0px 5px' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../img/card 1.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Cards;

// 