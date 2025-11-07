# `bedrockagentcoreCodeInterpreter` Submodule <a name="`bedrockagentcoreCodeInterpreter` Submodule" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreCodeInterpreter <a name="BedrockagentcoreCodeInterpreter" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter aws_bedrockagentcore_code_interpreter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

bedrockagentcorecodeinterpreter.NewBedrockagentcoreCodeInterpreter(scope Construct, id *string, config BedrockagentcoreCodeInterpreterConfig) BedrockagentcoreCodeInterpreter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig">BedrockagentcoreCodeInterpreterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig">BedrockagentcoreCodeInterpreterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putNetworkConfiguration"></a>

```go
func PutNetworkConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putNetworkConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts"></a>

```go
func PutTimeouts(value BedrockagentcoreCodeInterpreterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetExecutionRoleArn"></a>

```go
func ResetExecutionRoleArn()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetNetworkConfiguration"></a>

```go
func ResetNetworkConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreCodeInterpreter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

bedrockagentcorecodeinterpreter.BedrockagentcoreCodeInterpreter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

bedrockagentcorecodeinterpreter.BedrockagentcoreCodeInterpreter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

bedrockagentcorecodeinterpreter.BedrockagentcoreCodeInterpreter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

bedrockagentcorecodeinterpreter.BedrockagentcoreCodeInterpreter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BedrockagentcoreCodeInterpreter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcoreCodeInterpreter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcoreCodeInterpreter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreCodeInterpreter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterArn">CodeInterpreterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterId">CodeInterpreterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList">BedrockagentcoreCodeInterpreterNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference">BedrockagentcoreCodeInterpreterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CodeInterpreterArn`<sup>Required</sup> <a name="CodeInterpreterArn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterArn"></a>

```go
func CodeInterpreterArn() *string
```

- *Type:* *string

---

##### `CodeInterpreterId`<sup>Required</sup> <a name="CodeInterpreterId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterId"></a>

```go
func CodeInterpreterId() *string
```

- *Type:* *string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfiguration"></a>

```go
func NetworkConfiguration() BedrockagentcoreCodeInterpreterNetworkConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList">BedrockagentcoreCodeInterpreterNetworkConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeouts"></a>

```go
func Timeouts() BedrockagentcoreCodeInterpreterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference">BedrockagentcoreCodeInterpreterTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfigurationInput"></a>

```go
func NetworkConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreCodeInterpreterConfig <a name="BedrockagentcoreCodeInterpreterConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

&bedrockagentcorecodeinterpreter.BedrockagentcoreCodeInterpreterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	ExecutionRoleArn: *string,
	NetworkConfiguration: interface{},
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#name BedrockagentcoreCodeInterpreter#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#description BedrockagentcoreCodeInterpreter#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#execution_role_arn BedrockagentcoreCodeInterpreter#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code>interface{}</code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#tags BedrockagentcoreCodeInterpreter#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#name BedrockagentcoreCodeInterpreter#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#description BedrockagentcoreCodeInterpreter#description}.

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#execution_role_arn BedrockagentcoreCodeInterpreter#execution_role_arn}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.networkConfiguration"></a>

```go
NetworkConfiguration interface{}
```

- *Type:* interface{}

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#network_configuration BedrockagentcoreCodeInterpreter#network_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#region BedrockagentcoreCodeInterpreter#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#tags BedrockagentcoreCodeInterpreter#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.timeouts"></a>

```go
Timeouts BedrockagentcoreCodeInterpreterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#timeouts BedrockagentcoreCodeInterpreter#timeouts}

---

### BedrockagentcoreCodeInterpreterNetworkConfiguration <a name="BedrockagentcoreCodeInterpreterNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

&bedrockagentcorecodeinterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration {
	NetworkMode: *string,
	VpcConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.networkMode">NetworkMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#network_mode BedrockagentcoreCodeInterpreter#network_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.vpcConfig">VpcConfig</a></code> | <code>interface{}</code> | vpc_config block. |

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.networkMode"></a>

```go
NetworkMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#network_mode BedrockagentcoreCodeInterpreter#network_mode}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.vpcConfig"></a>

```go
VpcConfig interface{}
```

- *Type:* interface{}

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#vpc_config BedrockagentcoreCodeInterpreter#vpc_config}

---

### BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

&bedrockagentcorecodeinterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig {
	SecurityGroups: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#security_groups BedrockagentcoreCodeInterpreter#security_groups}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#subnets BedrockagentcoreCodeInterpreter#subnets}. |

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#security_groups BedrockagentcoreCodeInterpreter#security_groups}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#subnets BedrockagentcoreCodeInterpreter#subnets}.

---

### BedrockagentcoreCodeInterpreterTimeouts <a name="BedrockagentcoreCodeInterpreterTimeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

&bedrockagentcorecodeinterpreter.BedrockagentcoreCodeInterpreterTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#create BedrockagentcoreCodeInterpreter#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/bedrockagentcore_code_interpreter#delete BedrockagentcoreCodeInterpreter#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreCodeInterpreterNetworkConfigurationList <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

bedrockagentcorecodeinterpreter.NewBedrockagentcoreCodeInterpreterNetworkConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreCodeInterpreterNetworkConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.get"></a>

```go
func Get(index *f64) BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

bedrockagentcorecodeinterpreter.NewBedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.putVpcConfig"></a>

```go
func PutVpcConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkModeInput">NetworkModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkMode">NetworkMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfig"></a>

```go
func VpcConfig() BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList</a>

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkModeInput"></a>

```go
func NetworkModeInput() *string
```

- *Type:* *string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkMode"></a>

```go
func NetworkMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

bedrockagentcorecodeinterpreter.NewBedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.get"></a>

```go
func Get(index *f64) BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

bedrockagentcorecodeinterpreter.NewBedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreCodeInterpreterTimeoutsOutputReference <a name="BedrockagentcoreCodeInterpreterTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorecodeinterpreter"

bedrockagentcorecodeinterpreter.NewBedrockagentcoreCodeInterpreterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreCodeInterpreterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



