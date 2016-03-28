var React = require("react");
var PropTypes = React.PropTypes;

var {Glyphicon, Input, Button, FormControls} = require("react-bootstrap/lib");

function ProductPropertyComponent(props) {
	return 	<tr>
						<td className="col-md-1">
							<Input name={'propertyProducts['+props.property.id +'][order]'} groupClassName="mb0" type="text" value={props.property.order} />
						</td>
						<td>
							<Input name={'propertyProducts['+props.property.id +'][name]'} groupClassName="mb0" type="text" value={props.property.name} />
						</td>
						<td>
							<Input name={'propertyProducts['+props.property.id +'][value]'} groupClassName="mb0" type="text"  value={props.property.value} />
						</td>
						<td>
							<input type="hidden" name={'propertyProducts['+props.property.id +'][productId]'}  value={props.property.productId}/>
							<Button><Glyphicon glyph="pencil" /></Button>
						</td>
					</tr>
}

module.exports = ProductPropertyComponent;