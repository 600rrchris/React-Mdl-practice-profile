import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAD7+/vy8vLo6OjOzs739/eqqqrv7++WlpZmZmaurq7X19coKCjb29ufn59MTEx8fHxAQEAtLS3l5eW7u7uGhoZZWVmQkJBRUVF1dXXGxsYNDQ0zMzO/v79eXl4XFxcfHx9lZWVCQkJwcHAbGxuioqIjIyPm3M1cAAAHm0lEQVR4nN2d55qqMBCGCWJBXF1Xsbet3v8dHnvBAGHyhZmc9/cp+R5DpmYSBHXT6NX+X9ZLNAmikHsRLum8BW3V4V6FQ5Zq+aXUknsZTjjtzMl6fRCoutyLcUDcOZ4vw8VqpY6MudeDJhypOAj6qRqoMx/cKwJzEKiCII3UYH5RqIbca4KyfDtImi43AzVaXRWqAfeqcDTXF03dkXpkFvwfVjGaqjyGCffiEAxy9Z1+xib3+myJPgoFHo7UybjPvUgb2iX6zszTFvdCqXSNBB758tKLa63Lld158+/UGVfRd6LNveRq9CsLVGrv08naIwg88OOND0D5BU/sPLEdHarAA36cOJVO0Swz7tUbYG4HPZWY2AmUbzZsPsILwj2c/GjJHNHJxiZAoJpzqyjC6hy9kXLLyGcJEah+uXXk841RKNfwV48oclhzK8mjOC1TBakVuLK8jDkTbil6WjCBUs8aiDG8EHGL0WKWXDNjwy1GywyoUGaIMQQq3HKL0bIFKpRpEd+BCnfcYrTgzOEBkbl+qMIGtxod/79C5HcoUyEigyFb4Q9SociTZgIUuOIWowXptY24xWhBet7v3GK0gPJQJ2Q2TSHjQ5k9U4CM/g2hqX2gQpkxfrDHKeSWkgPOqZEZACNNvsyDBlAdvSE1I0zsMtHArSQPmLn44VaSyydIocxsaRD+bFFR/uiLW4wWXOVJCa0gItOlMotP0DSNyLNmXr5ucxbcanR8IRWKrMwg0zQye79wPtsBkQ3DyBBfZrq0ARQoM5kYjMpXbopIYwE9akS6NEGwwSkU2tIOzLVxS8kD5rcJ/QyBSW+hmzSw7tO/IjKwuADxvsXu0SMQv0b0PAJIDy23iGIAAr+5NRQDMBiSz5kAUukWmkq8AjhqRHZh3AmtBcqs4D9gnVMUmb94xDqXIfpe1xHbbTrlFlCO5TYV2qLwiGWAwb18E95sBIo/Z45YNX9xL94MC4FSOxQyWBQSuZduClmg0CTiK1SrL/MaiRZi9ltqF40GWmON8MDwGcolrx33oquxKleUxaM9eqR6JBxzL7kqVdMZHsQUWarlpPbezIi6E1b6FMXHvTqiCgLllmIKMbeKIjsvTDA9UD2I6/Mwi/c9M4TPGPyKK6FXK4qJbpn58a5E4Pc1xR165ZZuHxLXxbm3uyczkNkHpSd+Ov4LosX9/Y+FHuTzbxwEPlWqO3l3af4e/tDRy5PZ3f1CeN6WT+fHUjcDLH501KLnj1Iy19Mz0+TbzPQwrDMpmWv7rXjT2Lk3Cmf7DRrJ1+9F3SLJWoi7+9OV7aHGD7+S7vpZo3NAF0U87uKJ2K0aZvKkFVyVzN8ciuw3acUqg3lu8LXlby6umN9fvCzy2RgUog2WfyQdOpuceN7QSfnT/+3DbpURVY1nucG82ZjOotHRvzG7X54WpmOMqoG/Rf8C8yfZLE38GvwC5R2bq5jHRvbyd+edt9J/xqwU1609kdObGNayyx6vMs4cv9e5WRuDConC4ri2yoD6z7o0NipWXYqsYpWE44F1LdajevNhvsTq/bZz59/jsiztoiOv/YDUx7hwm/4nzrrSXwildqU4nIUdkXuBPl7tYot+5XTr6me0mgmR3al2LYxucsiWQy9Wf3c/PExKPLVSXOzUige7julfsz8e9xLEzRrjyMwc6G17APAWv5Rb0Qvob5Fbzyvgq8IvSRgBQIcS2N8xcAFSIXLmIw6kyeDWogdYq0IOtUSCSxxTAoo6gJ010IEXUFAKQfeXHQCK+ZETPcCAJhFB586AwSiU5nM/Akm/ISfLwilLxxoh1RieQSiEDimDAygyAp84cgHgNAWO1XGCvUJd+VoS9qE+4eJErVj7prDn8FxRXqEsQbJDc8a20C/X675ie2dR+mdo7dYAMt3OsVMoLxH8il3RFDqT1BF2978x7/u6xerWm3Cn9IKNwirNIHzYfIjy7f0Rm0KbDweN3Yw+ySmaOzZP63Kv3RD6dSIfPJoj9MSw3HT+M/SL7rkN2MKg35dCPvDrEnoU7MdRqiyOmk/ulZtC9WoEF50yUCv64rNQN6gJN+nJ4DtUv012TeYR6mHqh999gqhQfibxBtFcAN+rcA3RXHAvuwLEMiL3sitAC/P9MYfU6AL3XqN7aFND/DH41OKFPwbf9D5uFomdz3nQXhvwJf49QpsLCn2x0TE0x9SbCF9R52aink2tBdJ1NuA74u6hKJR5xyIPysQXP2qHV/5/hZRd+v8r9Oo73BEEehXiqxFJoU8Wn+aXepRqI8YWPvRDXaGlhP0pW5DT+nkDHQVCbMH0o1/oBE2gR1E+vVXBE4lWF4LbVm8b1YPtLcSm8ALNN2DUWSv55paRC2zwYBRL3K3TFDqLpx/LcsXniYNJfNGfFG98mzgb/t1IidOwcOwmTdfPfYzbXbaLJtt2XRN4++36f8uPmfMfL0O0mdX2XU4Hdau70U+Gji9lrIcp+2zocJzG208H4j4W7Z6g6d6tXjrbohyDz+ksFfq8Thg1k1nXws2bLwZp34enLsJ+M4kX72vD2Tb79XQYJ032D45Cq9PbpIPJcDFd/57N6Gr1u19/vG8Xw8lskKSbZtRweE7+AzcDh/Ci8H9VAAAAAElFTkSuQmCC"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | Javascript | React | Node.Js | MongoDB | Express | Mongoose | Object Oriented Programming | Scrum</p>
                        <div className="social-links">
                            {/* Linkedin */}
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                             {/* Github */}
                             <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                             {/* Freecodecamp */}
                             <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true"/>
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;