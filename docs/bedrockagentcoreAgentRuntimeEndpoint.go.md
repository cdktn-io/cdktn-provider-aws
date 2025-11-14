# `bedrockagentcoreAgentRuntimeEndpoint` Submodule <a name="`bedrockagentcoreAgentRuntimeEndpoint` Submodule" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreAgentRuntimeEndpoint <a name="BedrockagentcoreAgentRuntimeEndpoint" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint aws_bedrockagentcore_agent_runtime_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcoreagentruntimeendpoint"

bedrockagentcoreagentruntimeendpoint.NewBedrockagentcoreAgentRuntimeEndpoint(scope Construct, id *string, config BedrockagentcoreAgentRuntimeEndpointConfig) BedrockagentcoreAgentRuntimeEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig">BedrockagentcoreAgentRuntimeEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig">BedrockagentcoreAgentRuntimeEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetAgentRuntimeVersion">ResetAgentRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value BedrockagentcoreAgentRuntimeEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

---

##### `ResetAgentRuntimeVersion` <a name="ResetAgentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetAgentRuntimeVersion"></a>

```go
func ResetAgentRuntimeVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreAgentRuntimeEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcoreagentruntimeendpoint"

bedrockagentcoreagentruntimeendpoint.BedrockagentcoreAgentRuntimeEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcoreagentruntimeendpoint"

bedrockagentcoreagentruntimeendpoint.BedrockagentcoreAgentRuntimeEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcoreagentruntimeendpoint"

bedrockagentcoreagentruntimeendpoint.BedrockagentcoreAgentRuntimeEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcoreagentruntimeendpoint"

bedrockagentcoreagentruntimeendpoint.BedrockagentcoreAgentRuntimeEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BedrockagentcoreAgentRuntimeEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcoreAgentRuntimeEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcoreAgentRuntimeEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreAgentRuntimeEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeArn">AgentRuntimeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeEndpointArn">AgentRuntimeEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference">BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeIdInput">AgentRuntimeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersionInput">AgentRuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeId">AgentRuntimeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersion">AgentRuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentRuntimeArn`<sup>Required</sup> <a name="AgentRuntimeArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeArn"></a>

```go
func AgentRuntimeArn() *string
```

- *Type:* *string

---

##### `AgentRuntimeEndpointArn`<sup>Required</sup> <a name="AgentRuntimeEndpointArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeEndpointArn"></a>

```go
func AgentRuntimeEndpointArn() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeouts"></a>

```go
func Timeouts() BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference">BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference</a>

---

##### `AgentRuntimeIdInput`<sup>Optional</sup> <a name="AgentRuntimeIdInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeIdInput"></a>

```go
func AgentRuntimeIdInput() *string
```

- *Type:* *string

---

##### `AgentRuntimeVersionInput`<sup>Optional</sup> <a name="AgentRuntimeVersionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersionInput"></a>

```go
func AgentRuntimeVersionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AgentRuntimeId`<sup>Required</sup> <a name="AgentRuntimeId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeId"></a>

```go
func AgentRuntimeId() *string
```

- *Type:* *string

---

##### `AgentRuntimeVersion`<sup>Required</sup> <a name="AgentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersion"></a>

```go
func AgentRuntimeVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreAgentRuntimeEndpointConfig <a name="BedrockagentcoreAgentRuntimeEndpointConfig" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcoreagentruntimeendpoint"

&bedrockagentcoreagentruntimeendpoint.BedrockagentcoreAgentRuntimeEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgentRuntimeId: *string,
	Name: *string,
	AgentRuntimeVersion: *string,
	Description: *string,
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeId">AgentRuntimeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_id BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#name BedrockagentcoreAgentRuntimeEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeVersion">AgentRuntimeVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_version BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#description BedrockagentcoreAgentRuntimeEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#tags BedrockagentcoreAgentRuntimeEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentRuntimeId`<sup>Required</sup> <a name="AgentRuntimeId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeId"></a>

```go
AgentRuntimeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_id BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#name BedrockagentcoreAgentRuntimeEndpoint#name}.

---

##### `AgentRuntimeVersion`<sup>Optional</sup> <a name="AgentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeVersion"></a>

```go
AgentRuntimeVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_version BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#description BedrockagentcoreAgentRuntimeEndpoint#description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#region BedrockagentcoreAgentRuntimeEndpoint#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#tags BedrockagentcoreAgentRuntimeEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.timeouts"></a>

```go
Timeouts BedrockagentcoreAgentRuntimeEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#timeouts BedrockagentcoreAgentRuntimeEndpoint#timeouts}

---

### BedrockagentcoreAgentRuntimeEndpointTimeouts <a name="BedrockagentcoreAgentRuntimeEndpointTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcoreagentruntimeendpoint"

&bedrockagentcoreagentruntimeendpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#create BedrockagentcoreAgentRuntimeEndpoint#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#delete BedrockagentcoreAgentRuntimeEndpoint#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#update BedrockagentcoreAgentRuntimeEndpoint#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference <a name="BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcoreagentruntimeendpoint"

bedrockagentcoreagentruntimeendpoint.NewBedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



