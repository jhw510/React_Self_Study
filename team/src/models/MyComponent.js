import React from "react";
import PropTypes from 'prop-types'

const MyComponent = ({name,children,favoriteNumber}) =>{

    return (
        <div> 안녕 내이름은 {name} <br/>
            children 값은 {children}
            입니다.
            <br/>
            제가 좋아하는 숫자는 {favoriteNumber}
        </div>
    );

};
MyComponent.propTypes={
    name:PropTypes.string,
    favoriteNumber:PropTypes.number.isRequired
};
export default MyComponent