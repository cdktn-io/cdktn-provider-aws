# `bedrockagentcoreBrowser` Submodule <a name="`bedrockagentcoreBrowser` Submodule" id="@cdktf/provider-aws.bedrockagentcoreBrowser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreBrowser <a name="BedrockagentcoreBrowser" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser aws_bedrockagentcore_browser}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.NewBedrockagentcoreBrowser(scope Construct, id *string, config BedrockagentcoreBrowserConfig) BedrockagentcoreBrowser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig">BedrockagentcoreBrowserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig">BedrockagentcoreBrowserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putRecording">PutRecording</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetRecording">ResetRecording</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putNetworkConfiguration"></a>

```go
func PutNetworkConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putNetworkConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRecording` <a name="PutRecording" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putRecording"></a>

```go
func PutRecording(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putRecording.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putTimeouts"></a>

```go
func PutTimeouts(value BedrockagentcoreBrowserTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetExecutionRoleArn"></a>

```go
func ResetExecutionRoleArn()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetNetworkConfiguration"></a>

```go
func ResetNetworkConfiguration()
```

##### `ResetRecording` <a name="ResetRecording" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetRecording"></a>

```go
func ResetRecording()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreBrowser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.BedrockagentcoreBrowser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.BedrockagentcoreBrowser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.BedrockagentcoreBrowser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.BedrockagentcoreBrowser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BedrockagentcoreBrowser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcoreBrowser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcoreBrowser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreBrowser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserArn">BrowserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserId">BrowserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList">BedrockagentcoreBrowserNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.recording">Recording</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList">BedrockagentcoreBrowserRecordingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference">BedrockagentcoreBrowserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.recordingInput">RecordingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BrowserArn`<sup>Required</sup> <a name="BrowserArn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserArn"></a>

```go
func BrowserArn() *string
```

- *Type:* *string

---

##### `BrowserId`<sup>Required</sup> <a name="BrowserId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserId"></a>

```go
func BrowserId() *string
```

- *Type:* *string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.networkConfiguration"></a>

```go
func NetworkConfiguration() BedrockagentcoreBrowserNetworkConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList">BedrockagentcoreBrowserNetworkConfigurationList</a>

---

##### `Recording`<sup>Required</sup> <a name="Recording" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.recording"></a>

```go
func Recording() BedrockagentcoreBrowserRecordingList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList">BedrockagentcoreBrowserRecordingList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.timeouts"></a>

```go
func Timeouts() BedrockagentcoreBrowserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference">BedrockagentcoreBrowserTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.networkConfigurationInput"></a>

```go
func NetworkConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RecordingInput`<sup>Optional</sup> <a name="RecordingInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.recordingInput"></a>

```go
func RecordingInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreBrowserConfig <a name="BedrockagentcoreBrowserConfig" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

&bedrockagentcorebrowser.BedrockagentcoreBrowserConfig {
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
	Recording: interface{},
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#name BedrockagentcoreBrowser#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#description BedrockagentcoreBrowser#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#execution_role_arn BedrockagentcoreBrowser#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code>interface{}</code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.recording">Recording</a></code> | <code>interface{}</code> | recording block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#tags BedrockagentcoreBrowser#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#name BedrockagentcoreBrowser#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#description BedrockagentcoreBrowser#description}.

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#execution_role_arn BedrockagentcoreBrowser#execution_role_arn}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.networkConfiguration"></a>

```go
NetworkConfiguration interface{}
```

- *Type:* interface{}

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#network_configuration BedrockagentcoreBrowser#network_configuration}

---

##### `Recording`<sup>Optional</sup> <a name="Recording" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.recording"></a>

```go
Recording interface{}
```

- *Type:* interface{}

recording block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#recording BedrockagentcoreBrowser#recording}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#region BedrockagentcoreBrowser#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#tags BedrockagentcoreBrowser#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.timeouts"></a>

```go
Timeouts BedrockagentcoreBrowserTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#timeouts BedrockagentcoreBrowser#timeouts}

---

### BedrockagentcoreBrowserNetworkConfiguration <a name="BedrockagentcoreBrowserNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

&bedrockagentcorebrowser.BedrockagentcoreBrowserNetworkConfiguration {
	NetworkMode: *string,
	NetworkModeConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.property.networkMode">NetworkMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#network_mode BedrockagentcoreBrowser#network_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.property.networkModeConfig">NetworkModeConfig</a></code> | <code>interface{}</code> | network_mode_config block. |

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.property.networkMode"></a>

```go
NetworkMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#network_mode BedrockagentcoreBrowser#network_mode}.

---

##### `NetworkModeConfig`<sup>Optional</sup> <a name="NetworkModeConfig" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.property.networkModeConfig"></a>

```go
NetworkModeConfig interface{}
```

- *Type:* interface{}

network_mode_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#network_mode_config BedrockagentcoreBrowser#network_mode_config}

---

### BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig <a name="BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

&bedrockagentcorebrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig {
	SecurityGroups: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#security_groups BedrockagentcoreBrowser#security_groups}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#subnets BedrockagentcoreBrowser#subnets}. |

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#security_groups BedrockagentcoreBrowser#security_groups}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#subnets BedrockagentcoreBrowser#subnets}.

---

### BedrockagentcoreBrowserRecording <a name="BedrockagentcoreBrowserRecording" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

&bedrockagentcorebrowser.BedrockagentcoreBrowserRecording {
	Enabled: interface{},
	S3Location: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#enabled BedrockagentcoreBrowser#enabled}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.property.s3Location">S3Location</a></code> | <code>interface{}</code> | s3_location block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#enabled BedrockagentcoreBrowser#enabled}.

---

##### `S3Location`<sup>Optional</sup> <a name="S3Location" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.property.s3Location"></a>

```go
S3Location interface{}
```

- *Type:* interface{}

s3_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#s3_location BedrockagentcoreBrowser#s3_location}

---

### BedrockagentcoreBrowserRecordingS3Location <a name="BedrockagentcoreBrowserRecordingS3Location" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

&bedrockagentcorebrowser.BedrockagentcoreBrowserRecordingS3Location {
	Bucket: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#bucket BedrockagentcoreBrowser#bucket}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#prefix BedrockagentcoreBrowser#prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#bucket BedrockagentcoreBrowser#bucket}.

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#prefix BedrockagentcoreBrowser#prefix}.

---

### BedrockagentcoreBrowserTimeouts <a name="BedrockagentcoreBrowserTimeouts" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

&bedrockagentcorebrowser.BedrockagentcoreBrowserTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#create BedrockagentcoreBrowser#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_browser#delete BedrockagentcoreBrowser#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreBrowserNetworkConfigurationList <a name="BedrockagentcoreBrowserNetworkConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.NewBedrockagentcoreBrowserNetworkConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreBrowserNetworkConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.get"></a>

```go
func Get(index *f64) BedrockagentcoreBrowserNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList <a name="BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.NewBedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.get"></a>

```go
func Get(index *f64) BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference <a name="BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.NewBedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreBrowserNetworkConfigurationOutputReference <a name="BedrockagentcoreBrowserNetworkConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.NewBedrockagentcoreBrowserNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreBrowserNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.putNetworkModeConfig">PutNetworkModeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resetNetworkModeConfig">ResetNetworkModeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkModeConfig` <a name="PutNetworkModeConfig" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.putNetworkModeConfig"></a>

```go
func PutNetworkModeConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.putNetworkModeConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNetworkModeConfig` <a name="ResetNetworkModeConfig" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resetNetworkModeConfig"></a>

```go
func ResetNetworkModeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkModeConfig">NetworkModeConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList">BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkModeConfigInput">NetworkModeConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkModeInput">NetworkModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkMode">NetworkMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkModeConfig`<sup>Required</sup> <a name="NetworkModeConfig" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkModeConfig"></a>

```go
func NetworkModeConfig() BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList">BedrockagentcoreBrowserNetworkConfigurationNetworkModeConfigList</a>

---

##### `NetworkModeConfigInput`<sup>Optional</sup> <a name="NetworkModeConfigInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkModeConfigInput"></a>

```go
func NetworkModeConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkModeInput"></a>

```go
func NetworkModeInput() *string
```

- *Type:* *string

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkMode"></a>

```go
func NetworkMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreBrowserRecordingList <a name="BedrockagentcoreBrowserRecordingList" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.NewBedrockagentcoreBrowserRecordingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreBrowserRecordingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.get"></a>

```go
func Get(index *f64) BedrockagentcoreBrowserRecordingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreBrowserRecordingOutputReference <a name="BedrockagentcoreBrowserRecordingOutputReference" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.NewBedrockagentcoreBrowserRecordingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreBrowserRecordingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.putS3Location">PutS3Location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resetS3Location">ResetS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Location` <a name="PutS3Location" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.putS3Location"></a>

```go
func PutS3Location(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.putS3Location.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetS3Location` <a name="ResetS3Location" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resetS3Location"></a>

```go
func ResetS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList">BedrockagentcoreBrowserRecordingS3LocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.s3LocationInput">S3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.s3Location"></a>

```go
func S3Location() BedrockagentcoreBrowserRecordingS3LocationList
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList">BedrockagentcoreBrowserRecordingS3LocationList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `S3LocationInput`<sup>Optional</sup> <a name="S3LocationInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.s3LocationInput"></a>

```go
func S3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreBrowserRecordingS3LocationList <a name="BedrockagentcoreBrowserRecordingS3LocationList" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.NewBedrockagentcoreBrowserRecordingS3LocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreBrowserRecordingS3LocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.get"></a>

```go
func Get(index *f64) BedrockagentcoreBrowserRecordingS3LocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreBrowserRecordingS3LocationOutputReference <a name="BedrockagentcoreBrowserRecordingS3LocationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.NewBedrockagentcoreBrowserRecordingS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreBrowserRecordingS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreBrowserTimeoutsOutputReference <a name="BedrockagentcoreBrowserTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/bedrockagentcorebrowser"

bedrockagentcorebrowser.NewBedrockagentcoreBrowserTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreBrowserTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



