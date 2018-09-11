import React, { Component } from "react";
import './FeatureList.css';
import Feature from "./Feature";
import { featureData } from "./featureData";


export class FeatureList extends Component {
    render() {
        const featureComponents = featureData.map((value, index) => {
            return <Feature key={index} selected="true" feature={value} />
        });

        return (
            <section className="features">
                { featureComponents }
            </section>
        );
    }
}