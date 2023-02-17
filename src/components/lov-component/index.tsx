import { useEffect, useState } from "react";
import styles from './lov-component.module.css';
interface PageProps {
    requestMethod: Function;
    label: string;
    onItemSelect: Function
    value: any;
    dropdownProperties: string;
    textProperty?: string;
    required?: boolean
    disabled?: boolean

}

export default function LovComponent(props: PageProps) {
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    console.log("searText", searchText,props.label)


    async function getData(value: string) {
        let response = await props.requestMethod(value);
        let data = await response.json();
        setResults(data);
        setShowSuggestions(true);
    }
    function selectItem(item: any) {
        setResults([]);
        props.onItemSelect(item);
        setShowSuggestions(false);
    }
    function getTextValue() {
        if (props.value) {
            const property = props.textProperty ? props.textProperty : props.dropdownProperties.split(",")[0];
            setSearchText(props.value[property])
        }
    }
    function onSearchChange(value: string) {
        console.log("searchText changed", value)
        setSearchText(value);
        getData(value);
    }
    function displayItem(data: any): string {
        if (props.dropdownProperties) {
            let infoArr = props.dropdownProperties.split(",").map(property => data[property]);
            return infoArr.join(", ");
        }
        return "";
    }
    function onBlur() {
        console.log(onBlur);
        setTimeout(() => {
            setShowSuggestions(false)
        }, 500)
    }
    useEffect(() => {
        getTextValue()
    }, [props.value])
    return (
        <>
            <label className="form-label">{props.label}</label>
            <div className={styles.dropdownContainer}>
                <input type="text" value={searchText} className="form-control"
                    onChange={e => onSearchChange(e.target.value)}
                    onBlur={() => onBlur()}
                    required={props.required ? props.required : false}
                    disabled={props.disabled ? props.disabled : false}
                />
                {
                    showSuggestions ? (
                        <ul className={styles.suggestions}>
                            {results && results.map((data: any) => (
                                <li className={styles.suggestionsItem} key={data.id} onClick={() => selectItem(data)}>{displayItem(data)}</li>
                            ))
                            }
                        </ul>
                    ) : ("")
                }
            </div>

        </>
    )

}