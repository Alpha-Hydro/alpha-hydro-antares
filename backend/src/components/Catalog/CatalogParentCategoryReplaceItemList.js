var React = require("react");
var PropTypes = React.PropTypes;

var {Glyphicon, ListGroupItem, Row, Col} = require("react-bootstrap/lib");

function CatalogParentCategoryReplaceItemList(props) {
    return props.currentId != 0
        ?   <ListGroupItem onClick={props.returnParentCategory}>
            <Row>
                <Col xs={1}>
                    <Glyphicon glyph="level-up"/>
                </Col>
                <Col xs={11}>
                    ...
                </Col>
            </Row>
            </ListGroupItem>

        :   <ListGroupItem >
                <Row>
                    <Col xs={1}>
                        <input
                            type="radio"
                            name="catalogCategory"
                            defaultChecked=""
                            id="0"
                            onClick={props.selectRootCategory}
                        />
                    </Col>
                    <Col xs={11}>
                        Нет категории (В корне каталога)
                    </Col>
                </Row>
            </ListGroupItem>
}

CatalogParentCategoryReplaceItemList.propTypes = {
    currentId: PropTypes.string.isRequired,
    returnParentCategory: PropTypes.func.isRequired,
    selectRootCategory: PropTypes.func.isRequired
};

module.exports = CatalogParentCategoryReplaceItemList;