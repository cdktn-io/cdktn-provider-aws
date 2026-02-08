# `apigatewayv2RoutingRule` Submodule <a name="`apigatewayv2RoutingRule` Submodule" id="@cdktn/provider-aws.apigatewayv2RoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RoutingRule <a name="Apigatewayv2RoutingRule" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule aws_apigatewayv2_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRule(scope Construct, id *string, config Apigatewayv2RoutingRuleConfig) Apigatewayv2RoutingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig">Apigatewayv2RoutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig">Apigatewayv2RoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction"></a>

```go
func PutAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition"></a>

```go
func PutCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetAction"></a>

```go
func ResetAction()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Apigatewayv2RoutingRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.Apigatewayv2RoutingRule_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.Apigatewayv2RoutingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.Apigatewayv2RoutingRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.Apigatewayv2RoutingRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Apigatewayv2RoutingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Apigatewayv2RoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Apigatewayv2RoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Apigatewayv2RoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList">Apigatewayv2RoutingRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList">Apigatewayv2RoutingRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn">RoutingRuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId">RoutingRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionInput">ConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.action"></a>

```go
func Action() Apigatewayv2RoutingRuleActionList
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList">Apigatewayv2RoutingRuleActionList</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.condition"></a>

```go
func Condition() Apigatewayv2RoutingRuleConditionList
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList">Apigatewayv2RoutingRuleConditionList</a>

---

##### `RoutingRuleArn`<sup>Required</sup> <a name="RoutingRuleArn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn"></a>

```go
func RoutingRuleArn() *string
```

- *Type:* *string

---

##### `RoutingRuleId`<sup>Required</sup> <a name="RoutingRuleId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId"></a>

```go
func RoutingRuleId() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionInput"></a>

```go
func ConditionInput() interface{}
```

- *Type:* interface{}

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RoutingRuleAction <a name="Apigatewayv2RoutingRuleAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleAction {
	InvokeApi: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.property.invokeApi">InvokeApi</a></code> | <code>interface{}</code> | invoke_api block. |

---

##### `InvokeApi`<sup>Optional</sup> <a name="InvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.property.invokeApi"></a>

```go
InvokeApi interface{}
```

- *Type:* interface{}

invoke_api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#invoke_api Apigatewayv2RoutingRule#invoke_api}

---

### Apigatewayv2RoutingRuleActionInvokeApi <a name="Apigatewayv2RoutingRuleActionInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleActionInvokeApi {
	ApiId: *string,
	Stage: *string,
	StripBasePath: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.apiId">ApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stage">Stage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stripBasePath">StripBasePath</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}. |

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}.

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stage"></a>

```go
Stage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}.

---

##### `StripBasePath`<sup>Optional</sup> <a name="StripBasePath" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stripBasePath"></a>

```go
StripBasePath interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}.

---

### Apigatewayv2RoutingRuleCondition <a name="Apigatewayv2RoutingRuleCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleCondition {
	MatchBasePaths: interface{},
	MatchHeaders: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchBasePaths">MatchBasePaths</a></code> | <code>interface{}</code> | match_base_paths block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchHeaders">MatchHeaders</a></code> | <code>interface{}</code> | match_headers block. |

---

##### `MatchBasePaths`<sup>Optional</sup> <a name="MatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchBasePaths"></a>

```go
MatchBasePaths interface{}
```

- *Type:* interface{}

match_base_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#match_base_paths Apigatewayv2RoutingRule#match_base_paths}

---

##### `MatchHeaders`<sup>Optional</sup> <a name="MatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchHeaders"></a>

```go
MatchHeaders interface{}
```

- *Type:* interface{}

match_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#match_headers Apigatewayv2RoutingRule#match_headers}

---

### Apigatewayv2RoutingRuleConditionMatchBasePaths <a name="Apigatewayv2RoutingRuleConditionMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleConditionMatchBasePaths {
	AnyOf: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.property.anyOf">AnyOf</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}. |

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.property.anyOf"></a>

```go
AnyOf *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}.

---

### Apigatewayv2RoutingRuleConditionMatchHeaders <a name="Apigatewayv2RoutingRuleConditionMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleConditionMatchHeaders {
	AnyOf: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.property.anyOf">AnyOf</a></code> | <code>interface{}</code> | any_of block. |

---

##### `AnyOf`<sup>Optional</sup> <a name="AnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.property.anyOf"></a>

```go
AnyOf interface{}
```

- *Type:* interface{}

any_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf {
	Header: *string,
	ValueGlob: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.header">Header</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.valueGlob">ValueGlob</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}. |

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.header"></a>

```go
Header *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}.

---

##### `ValueGlob`<sup>Required</sup> <a name="ValueGlob" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.valueGlob"></a>

```go
ValueGlob *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}.

---

### Apigatewayv2RoutingRuleConfig <a name="Apigatewayv2RoutingRuleConfig" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	Priority: *f64,
	Action: interface{},
	Condition: interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.action">Action</a></code> | <code>interface{}</code> | action block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.condition">Condition</a></code> | <code>interface{}</code> | condition block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.action"></a>

```go
Action interface{}
```

- *Type:* interface{}

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#action Apigatewayv2RoutingRule#action}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.condition"></a>

```go
Condition interface{}
```

- *Type:* interface{}

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#condition Apigatewayv2RoutingRule#condition}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/apigatewayv2_routing_rule#region Apigatewayv2RoutingRule#region}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RoutingRuleActionInvokeApiList <a name="Apigatewayv2RoutingRuleActionInvokeApiList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleActionInvokeApiList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Apigatewayv2RoutingRuleActionInvokeApiList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get"></a>

```go
func Get(index *f64) Apigatewayv2RoutingRuleActionInvokeApiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleActionInvokeApiOutputReference <a name="Apigatewayv2RoutingRuleActionInvokeApiOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleActionInvokeApiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Apigatewayv2RoutingRuleActionInvokeApiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resetStripBasePath">ResetStripBasePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStripBasePath` <a name="ResetStripBasePath" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resetStripBasePath"></a>

```go
func ResetStripBasePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stageInput">StageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePathInput">StripBasePathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePath">StripBasePath</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stageInput"></a>

```go
func StageInput() *string
```

- *Type:* *string

---

##### `StripBasePathInput`<sup>Optional</sup> <a name="StripBasePathInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePathInput"></a>

```go
func StripBasePathInput() interface{}
```

- *Type:* interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `StripBasePath`<sup>Required</sup> <a name="StripBasePath" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePath"></a>

```go
func StripBasePath() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleActionList <a name="Apigatewayv2RoutingRuleActionList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Apigatewayv2RoutingRuleActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get"></a>

```go
func Get(index *f64) Apigatewayv2RoutingRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleActionOutputReference <a name="Apigatewayv2RoutingRuleActionOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Apigatewayv2RoutingRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi">PutInvokeApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resetInvokeApi">ResetInvokeApi</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInvokeApi` <a name="PutInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi"></a>

```go
func PutInvokeApi(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInvokeApi` <a name="ResetInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resetInvokeApi"></a>

```go
func ResetInvokeApi()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApi">InvokeApi</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList">Apigatewayv2RoutingRuleActionInvokeApiList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApiInput">InvokeApiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvokeApi`<sup>Required</sup> <a name="InvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApi"></a>

```go
func InvokeApi() Apigatewayv2RoutingRuleActionInvokeApiList
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList">Apigatewayv2RoutingRuleActionInvokeApiList</a>

---

##### `InvokeApiInput`<sup>Optional</sup> <a name="InvokeApiInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApiInput"></a>

```go
func InvokeApiInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionList <a name="Apigatewayv2RoutingRuleConditionList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Apigatewayv2RoutingRuleConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get"></a>

```go
func Get(index *f64) Apigatewayv2RoutingRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionMatchBasePathsList <a name="Apigatewayv2RoutingRuleConditionMatchBasePathsList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionMatchBasePathsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Apigatewayv2RoutingRuleConditionMatchBasePathsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get"></a>

```go
func Get(index *f64) Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionMatchBasePathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOf">AnyOf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOfInput"></a>

```go
func AnyOfInput() *[]*string
```

- *Type:* *[]*string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOf"></a>

```go
func AnyOf() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionMatchHeadersAnyOfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get"></a>

```go
func Get(index *f64) Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.headerInput">HeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlobInput">ValueGlobInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlob">ValueGlob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.headerInput"></a>

```go
func HeaderInput() *string
```

- *Type:* *string

---

##### `ValueGlobInput`<sup>Optional</sup> <a name="ValueGlobInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlobInput"></a>

```go
func ValueGlobInput() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `ValueGlob`<sup>Required</sup> <a name="ValueGlob" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlob"></a>

```go
func ValueGlob() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionMatchHeadersList <a name="Apigatewayv2RoutingRuleConditionMatchHeadersList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionMatchHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Apigatewayv2RoutingRuleConditionMatchHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get"></a>

```go
func Get(index *f64) Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionMatchHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf">PutAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resetAnyOf">ResetAnyOf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnyOf` <a name="PutAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf"></a>

```go
func PutAnyOf(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnyOf` <a name="ResetAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resetAnyOf"></a>

```go
func ResetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOf">AnyOf</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOf"></a>

```go
func AnyOf() Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList</a>

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOfInput"></a>

```go
func AnyOfInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionOutputReference <a name="Apigatewayv2RoutingRuleConditionOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Apigatewayv2RoutingRuleConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths">PutMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders">PutMatchHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchBasePaths">ResetMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchHeaders">ResetMatchHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchBasePaths` <a name="PutMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths"></a>

```go
func PutMatchBasePaths(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatchHeaders` <a name="PutMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders"></a>

```go
func PutMatchHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchBasePaths` <a name="ResetMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchBasePaths"></a>

```go
func ResetMatchBasePaths()
```

##### `ResetMatchHeaders` <a name="ResetMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchHeaders"></a>

```go
func ResetMatchHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePaths">MatchBasePaths</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList">Apigatewayv2RoutingRuleConditionMatchBasePathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeaders">MatchHeaders</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList">Apigatewayv2RoutingRuleConditionMatchHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePathsInput">MatchBasePathsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeadersInput">MatchHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchBasePaths`<sup>Required</sup> <a name="MatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePaths"></a>

```go
func MatchBasePaths() Apigatewayv2RoutingRuleConditionMatchBasePathsList
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList">Apigatewayv2RoutingRuleConditionMatchBasePathsList</a>

---

##### `MatchHeaders`<sup>Required</sup> <a name="MatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeaders"></a>

```go
func MatchHeaders() Apigatewayv2RoutingRuleConditionMatchHeadersList
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList">Apigatewayv2RoutingRuleConditionMatchHeadersList</a>

---

##### `MatchBasePathsInput`<sup>Optional</sup> <a name="MatchBasePathsInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePathsInput"></a>

```go
func MatchBasePathsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchHeadersInput`<sup>Optional</sup> <a name="MatchHeadersInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeadersInput"></a>

```go
func MatchHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



