import React from 'react';

import HornedBeasts from './HornedBeasts';

class Main extends React.Component {

    render() {
        return (
            <main>
                {/* new HornedBeasts("Dragon") */}
                <HornedBeasts
                    title="First HornedBeasts"
                    description="Mythical Horned Beasts Photograph by Paul D Stewart‏ picture 1"
                    img="https://render.fineartamerica.com/images/rendered/square-dynamic/small/images-medium-large-5/1560-munster-unicorn-engraving-paul-d-stewart.jpg"
                     alt="image 1 unavailable " title="image 1 "
                />
                <HornedBeasts
                    title="Second HornedBeasts"
                    description="Mythical Horned Beasts Photograph by Paul D Stewart‏ picture 2"
                    img="https://render.fineartamerica.com/images/rendered/square-product/small/images/rendered/default/print/8/5/break/images-medium-5/unicorn-paul-d-stewart.jpg"
                    alt="image 2 unavailable " title=" image 2"
                />
            </main>
        );
    }
}

export default Main;