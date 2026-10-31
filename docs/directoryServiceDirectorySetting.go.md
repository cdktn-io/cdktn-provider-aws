# `directoryServiceDirectorySetting` Submodule <a name="`directoryServiceDirectorySetting` Submodule" id="@cdktn/provider-aws.directoryServiceDirectorySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceDirectorySetting <a name="DirectoryServiceDirectorySetting" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_directory_setting aws_directory_service_directory_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedirectorysetting"

directoryservicedirectorysetting.NewDirectoryServiceDirectorySetting(scope Construct, id *string, config DirectoryServiceDirectorySettingConfig) DirectoryServiceDirectorySetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig">DirectoryServiceDirectorySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig">DirectoryServiceDirectorySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.putTimeouts"></a>

```go
func PutTimeouts(value DirectoryServiceDirectorySettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts">DirectoryServiceDirectorySettingTimeouts</a>

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryServiceDirectorySetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedirectorysetting"

directoryservicedirectorysetting.DirectoryServiceDirectorySetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedirectorysetting"

directoryservicedirectorysetting.DirectoryServiceDirectorySetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedirectorysetting"

directoryservicedirectorysetting.DirectoryServiceDirectorySetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedirectorysetting"

directoryservicedirectorysetting.DirectoryServiceDirectorySetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DirectoryServiceDirectorySetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DirectoryServiceDirectorySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DirectoryServiceDirectorySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_directory_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryServiceDirectorySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference">DirectoryServiceDirectorySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.timeouts"></a>

```go
func Timeouts() DirectoryServiceDirectorySettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference">DirectoryServiceDirectorySettingTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceDirectorySettingConfig <a name="DirectoryServiceDirectorySettingConfig" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedirectorysetting"

&directoryservicedirectorysetting.DirectoryServiceDirectorySettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DirectoryId: *string,
	Name: *string,
	Value: *string,
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v26.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_directory_setting#directory_id DirectoryServiceDirectorySetting#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_directory_setting#name DirectoryServiceDirectorySetting#name}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_directory_setting#value DirectoryServiceDirectorySetting#value}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts">DirectoryServiceDirectorySettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_directory_setting#directory_id DirectoryServiceDirectorySetting#directory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_directory_setting#name DirectoryServiceDirectorySetting#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_directory_setting#value DirectoryServiceDirectorySetting#value}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_directory_setting#region DirectoryServiceDirectorySetting#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.timeouts"></a>

```go
Timeouts DirectoryServiceDirectorySettingTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts">DirectoryServiceDirectorySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_directory_setting#timeouts DirectoryServiceDirectorySetting#timeouts}

---

### DirectoryServiceDirectorySettingTimeouts <a name="DirectoryServiceDirectorySettingTimeouts" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedirectorysetting"

&directoryservicedirectorysetting.DirectoryServiceDirectorySettingTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_directory_setting#create DirectoryServiceDirectorySetting#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_directory_setting#update DirectoryServiceDirectorySetting#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceDirectorySettingTimeoutsOutputReference <a name="DirectoryServiceDirectorySettingTimeoutsOutputReference" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v26/directoryservicedirectorysetting"

directoryservicedirectorysetting.NewDirectoryServiceDirectorySettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DirectoryServiceDirectorySettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



