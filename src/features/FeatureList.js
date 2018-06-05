import React, { Component } from "react";
import './FeatureList.css';
import { Feature } from "./Feature";
import { featureData } from "./featureData";


export class FeatureList extends Component {
    render() {
        const featureComponents = featureData.map((value) => {
            return <Feature selected="true" feature={value} />
        });

        return (
            <section className="features">
                <h1>features</h1>
                { featureComponents }
            </section>
        );
    }
}