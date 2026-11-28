# `devopsagentAssetFile` Submodule <a name="`devopsagentAssetFile` Submodule" id="@cdktn/provider-aws.devopsagentAssetFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAssetFile <a name="DevopsagentAssetFile" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file aws_devopsagent_asset_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/devopsagentassetfile"

devopsagentassetfile.NewDevopsagentAssetFile(scope Construct, id *string, config DevopsagentAssetFileConfig) DevopsagentAssetFile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig">DevopsagentAssetFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig">DevopsagentAssetFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContent` <a name="PutContent" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.putContent"></a>

```go
func PutContent(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.putContent.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetContent"></a>

```go
func ResetContent()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentAssetFile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/devopsagentassetfile"

devopsagentassetfile.DevopsagentAssetFile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/devopsagentassetfile"

devopsagentassetfile.DevopsagentAssetFile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/devopsagentassetfile"

devopsagentassetfile.DevopsagentAssetFile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/devopsagentassetfile"

devopsagentassetfile.DevopsagentAssetFile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DevopsagentAssetFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsagentAssetFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsagentAssetFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAssetFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.content">Content</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList">DevopsagentAssetFileContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadataActual">MetadataActual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.agentSpaceIdInput">AgentSpaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.assetIdInput">AssetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.contentInput">ContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.agentSpaceId">AgentSpaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.assetId">AssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.content"></a>

```go
func Content() DevopsagentAssetFileContentList
```

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList">DevopsagentAssetFileContentList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `MetadataActual`<sup>Required</sup> <a name="MetadataActual" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadataActual"></a>

```go
func MetadataActual() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `AgentSpaceIdInput`<sup>Optional</sup> <a name="AgentSpaceIdInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.agentSpaceIdInput"></a>

```go
func AgentSpaceIdInput() *string
```

- *Type:* *string

---

##### `AssetIdInput`<sup>Optional</sup> <a name="AssetIdInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.assetIdInput"></a>

```go
func AssetIdInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.contentInput"></a>

```go
func ContentInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.agentSpaceId"></a>

```go
func AgentSpaceId() *string
```

- *Type:* *string

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.assetId"></a>

```go
func AssetId() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAssetFileConfig <a name="DevopsagentAssetFileConfig" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/devopsagentassetfile"

&devopsagentassetfile.DevopsagentAssetFileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AgentSpaceId: *string,
	AssetId: *string,
	Path: *string,
	Content: interface{},
	Metadata: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.agentSpaceId">AgentSpaceId</a></code> | <code>*string</code> | Identifier of the Agent Space containing the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.assetId">AssetId</a></code> | <code>*string</code> | Identifier of the asset containing the file. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.path">Path</a></code> | <code>*string</code> | Path of the file within the asset. Changing this value requires replacement. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.content">Content</a></code> | <code>interface{}</code> | content block. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.metadata">Metadata</a></code> | <code>*string</code> | JSON document describing the file. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.agentSpaceId"></a>

```go
AgentSpaceId *string
```

- *Type:* *string

Identifier of the Agent Space containing the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#agent_space_id DevopsagentAssetFile#agent_space_id}

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.assetId"></a>

```go
AssetId *string
```

- *Type:* *string

Identifier of the asset containing the file. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#asset_id DevopsagentAssetFile#asset_id}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path of the file within the asset. Changing this value requires replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#path DevopsagentAssetFile#path}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.content"></a>

```go
Content interface{}
```

- *Type:* interface{}

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#content DevopsagentAssetFile#content}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

JSON document describing the file.

Updates replace supplied top-level fields and retain omitted fields in AWS; removing a field from this document does not delete it from AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#metadata DevopsagentAssetFile#metadata}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#region DevopsagentAssetFile#region}

---

### DevopsagentAssetFileContent <a name="DevopsagentAssetFileContent" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/devopsagentassetfile"

&devopsagentassetfile.DevopsagentAssetFileContent {
	Bytes: *string,
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.property.bytes">Bytes</a></code> | <code>*string</code> | Base64-encoded binary file content. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.property.text">Text</a></code> | <code>*string</code> | Text file content. |

---

##### `Bytes`<sup>Optional</sup> <a name="Bytes" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.property.bytes"></a>

```go
Bytes *string
```

- *Type:* *string

Base64-encoded binary file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#bytes DevopsagentAssetFile#bytes}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContent.property.text"></a>

```go
Text *string
```

- *Type:* *string

Text file content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/devopsagent_asset_file#text DevopsagentAssetFile#text}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAssetFileContentList <a name="DevopsagentAssetFileContentList" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/devopsagentassetfile"

devopsagentassetfile.NewDevopsagentAssetFileContentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsagentAssetFileContentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.get"></a>

```go
func Get(index *f64) DevopsagentAssetFileContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssetFileContentOutputReference <a name="DevopsagentAssetFileContentOutputReference" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/devopsagentassetfile"

devopsagentassetfile.NewDevopsagentAssetFileContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsagentAssetFileContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resetBytes">ResetBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBytes` <a name="ResetBytes" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resetBytes"></a>

```go
func ResetBytes()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.bytesInput">BytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.bytes">Bytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BytesInput`<sup>Optional</sup> <a name="BytesInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.bytesInput"></a>

```go
func BytesInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Bytes`<sup>Required</sup> <a name="Bytes" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.bytes"></a>

```go
func Bytes() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.devopsagentAssetFile.DevopsagentAssetFileContentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



