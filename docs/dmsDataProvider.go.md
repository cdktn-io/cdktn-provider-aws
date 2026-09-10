# `dmsDataProvider` Submodule <a name="`dmsDataProvider` Submodule" id="@cdktn/provider-aws.dmsDataProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDataProvider <a name="DmsDataProvider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider aws_dms_data_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProvider(scope Construct, id *string, config DmsDataProviderConfig) DmsDataProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig">DmsDataProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig">DmsDataProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetVirtual">ResetVirtual</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings"></a>

```go
func PutSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.putSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetName"></a>

```go
func ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVirtual` <a name="ResetVirtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.resetVirtual"></a>

```go
func ResetVirtual()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.DmsDataProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.DmsDataProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.DmsDataProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.DmsDataProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DmsDataProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DmsDataProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DmsDataProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList">DmsDataProviderSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtualInput">VirtualInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtual">Virtual</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settings"></a>

```go
func Settings() DmsDataProviderSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList">DmsDataProviderSettingsList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualInput`<sup>Optional</sup> <a name="VirtualInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtualInput"></a>

```go
func VirtualInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Virtual`<sup>Required</sup> <a name="Virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.virtual"></a>

```go
func Virtual() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDataProviderConfig <a name="DmsDataProviderConfig" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Engine: *string,
	Description: *string,
	Name: *string,
	Region: *string,
	Settings: interface{},
	Tags: *map[string]*string,
	Virtual: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#description DmsDataProvider#description}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#name DmsDataProvider#name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.settings">Settings</a></code> | <code>interface{}</code> | settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.virtual">Virtual</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#description DmsDataProvider#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#name DmsDataProvider#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#region DmsDataProvider#region}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.settings"></a>

```go
Settings interface{}
```

- *Type:* interface{}

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#settings DmsDataProvider#settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}.

---

##### `Virtual`<sup>Optional</sup> <a name="Virtual" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderConfig.property.virtual"></a>

```go
Virtual interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}.

---

### DmsDataProviderSettings <a name="DmsDataProviderSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettings {
	DocDbSettings: interface{},
	IbmDb2LuwSettings: interface{},
	IbmDb2ZosSettings: interface{},
	MariaDbSettings: interface{},
	MicrosoftSqlServerSettings: interface{},
	MongoDbSettings: interface{},
	MysqlSettings: interface{},
	OracleSettings: interface{},
	PostgresqlSettings: interface{},
	RedshiftSettings: interface{},
	SybaseAseSettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings">DocDbSettings</a></code> | <code>interface{}</code> | doc_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings">IbmDb2LuwSettings</a></code> | <code>interface{}</code> | ibm_db2_luw_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZosSettings">IbmDb2ZosSettings</a></code> | <code>interface{}</code> | ibm_db2_zos_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings">MariaDbSettings</a></code> | <code>interface{}</code> | maria_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings">MicrosoftSqlServerSettings</a></code> | <code>interface{}</code> | microsoft_sql_server_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings">MongoDbSettings</a></code> | <code>interface{}</code> | mongo_db_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mysqlSettings">MysqlSettings</a></code> | <code>interface{}</code> | mysql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings">OracleSettings</a></code> | <code>interface{}</code> | oracle_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.postgresqlSettings">PostgresqlSettings</a></code> | <code>interface{}</code> | postgresql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings">RedshiftSettings</a></code> | <code>interface{}</code> | redshift_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings">SybaseAseSettings</a></code> | <code>interface{}</code> | sybase_ase_settings block. |

---

##### `DocDbSettings`<sup>Optional</sup> <a name="DocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings"></a>

```go
DocDbSettings interface{}
```

- *Type:* interface{}

doc_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#doc_db_settings DmsDataProvider#doc_db_settings}

---

##### `IbmDb2LuwSettings`<sup>Optional</sup> <a name="IbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings"></a>

```go
IbmDb2LuwSettings interface{}
```

- *Type:* interface{}

ibm_db2_luw_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ibm_db2_luw_settings DmsDataProvider#ibm_db2_luw_settings}

---

##### `IbmDb2ZosSettings`<sup>Optional</sup> <a name="IbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZosSettings"></a>

```go
IbmDb2ZosSettings interface{}
```

- *Type:* interface{}

ibm_db2_zos_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ibm_db2_zos_settings DmsDataProvider#ibm_db2_zos_settings}

---

##### `MariaDbSettings`<sup>Optional</sup> <a name="MariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings"></a>

```go
MariaDbSettings interface{}
```

- *Type:* interface{}

maria_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#maria_db_settings DmsDataProvider#maria_db_settings}

---

##### `MicrosoftSqlServerSettings`<sup>Optional</sup> <a name="MicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings"></a>

```go
MicrosoftSqlServerSettings interface{}
```

- *Type:* interface{}

microsoft_sql_server_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#microsoft_sql_server_settings DmsDataProvider#microsoft_sql_server_settings}

---

##### `MongoDbSettings`<sup>Optional</sup> <a name="MongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings"></a>

```go
MongoDbSettings interface{}
```

- *Type:* interface{}

mongo_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#mongo_db_settings DmsDataProvider#mongo_db_settings}

---

##### `MysqlSettings`<sup>Optional</sup> <a name="MysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.mysqlSettings"></a>

```go
MysqlSettings interface{}
```

- *Type:* interface{}

mysql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#mysql_settings DmsDataProvider#mysql_settings}

---

##### `OracleSettings`<sup>Optional</sup> <a name="OracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings"></a>

```go
OracleSettings interface{}
```

- *Type:* interface{}

oracle_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#oracle_settings DmsDataProvider#oracle_settings}

---

##### `PostgresqlSettings`<sup>Optional</sup> <a name="PostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.postgresqlSettings"></a>

```go
PostgresqlSettings interface{}
```

- *Type:* interface{}

postgresql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#postgresql_settings DmsDataProvider#postgresql_settings}

---

##### `RedshiftSettings`<sup>Optional</sup> <a name="RedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings"></a>

```go
RedshiftSettings interface{}
```

- *Type:* interface{}

redshift_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#redshift_settings DmsDataProvider#redshift_settings}

---

##### `SybaseAseSettings`<sup>Optional</sup> <a name="SybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings"></a>

```go
SybaseAseSettings interface{}
```

- *Type:* interface{}

sybase_ase_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#sybase_ase_settings DmsDataProvider#sybase_ase_settings}

---

### DmsDataProviderSettingsDocDbSettings <a name="DmsDataProviderSettingsDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsDocDbSettings {
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2LuwSettings <a name="DmsDataProviderSettingsIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsIbmDb2LuwSettings {
	CertificateArn: *string,
	DatabaseName: *string,
	EncryptionAlgorithm: *f64,
	Port: *f64,
	S3AccessRoleArn: *string,
	S3Path: *string,
	SecurityMechanism: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#encryption_algorithm DmsDataProvider#encryption_algorithm}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3Path">S3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.securityMechanism">SecurityMechanism</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#security_mechanism DmsDataProvider#security_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.encryptionAlgorithm"></a>

```go
EncryptionAlgorithm *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#encryption_algorithm DmsDataProvider#encryption_algorithm}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3AccessRoleArn"></a>

```go
S3AccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.s3Path"></a>

```go
S3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `SecurityMechanism`<sup>Optional</sup> <a name="SecurityMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.securityMechanism"></a>

```go
SecurityMechanism *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#security_mechanism DmsDataProvider#security_mechanism}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2ZosSettings <a name="DmsDataProviderSettingsIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsIbmDb2ZosSettings {
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	S3AccessRoleArn: *string,
	S3Path: *string,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3Path">S3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3AccessRoleArn"></a>

```go
S3AccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.s3Path"></a>

```go
S3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMariaDbSettings <a name="DmsDataProviderSettingsMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsMariaDbSettings {
	CertificateArn: *string,
	Port: *f64,
	S3AccessRoleArn: *string,
	S3Path: *string,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3Path">S3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3AccessRoleArn"></a>

```go
S3AccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.s3Path"></a>

```go
S3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMicrosoftSqlServerSettings <a name="DmsDataProviderSettingsMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsMicrosoftSqlServerSettings {
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	S3AccessRoleArn: *string,
	S3Path: *string,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3Path">S3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3AccessRoleArn"></a>

```go
S3AccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.s3Path"></a>

```go
S3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMongoDbSettings <a name="DmsDataProviderSettingsMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsMongoDbSettings {
	AuthMechanism: *string,
	AuthSource: *string,
	AuthType: *string,
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism">AuthMechanism</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource">AuthSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType">AuthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `AuthMechanism`<sup>Optional</sup> <a name="AuthMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism"></a>

```go
AuthMechanism *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}.

---

##### `AuthSource`<sup>Optional</sup> <a name="AuthSource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource"></a>

```go
AuthSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}.

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMysqlSettings <a name="DmsDataProviderSettingsMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsMysqlSettings {
	CertificateArn: *string,
	Port: *f64,
	S3AccessRoleArn: *string,
	S3Path: *string,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3Path">S3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3AccessRoleArn"></a>

```go
S3AccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.s3Path"></a>

```go
S3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsOracleSettings <a name="DmsDataProviderSettingsOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsOracleSettings {
	AsmServer: *string,
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	S3AccessRoleArn: *string,
	S3Path: *string,
	SecretsManagerOracleAsmAccessRoleArn: *string,
	SecretsManagerOracleAsmSecretId: *string,
	SecretsManagerSecurityDbEncryptionAccessRoleArn: *string,
	SecretsManagerSecurityDbEncryptionSecretId: *string,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer">AsmServer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3Path">S3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn">SecretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId">SecretsManagerSecurityDbEncryptionSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `AsmServer`<sup>Optional</sup> <a name="AsmServer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer"></a>

```go
AsmServer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3AccessRoleArn"></a>

```go
S3AccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.s3Path"></a>

```go
S3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```go
SecretsManagerOracleAsmAccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}.

---

##### `SecretsManagerOracleAsmSecretId`<sup>Optional</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```go
SecretsManagerOracleAsmSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}.

---

##### `SecretsManagerSecurityDbEncryptionAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```go
SecretsManagerSecurityDbEncryptionAccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}.

---

##### `SecretsManagerSecurityDbEncryptionSecretId`<sup>Optional</sup> <a name="SecretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```go
SecretsManagerSecurityDbEncryptionSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsPostgresqlSettings <a name="DmsDataProviderSettingsPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsPostgresqlSettings {
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	S3AccessRoleArn: *string,
	S3Path: *string,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3Path">S3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3AccessRoleArn"></a>

```go
S3AccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.s3Path"></a>

```go
S3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsRedshiftSettings <a name="DmsDataProviderSettingsRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsRedshiftSettings {
	DatabaseName: *string,
	Port: *f64,
	S3AccessRoleArn: *string,
	S3Path: *string,
	ServerName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3Path">S3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `S3AccessRoleArn`<sup>Optional</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3AccessRoleArn"></a>

```go
S3AccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}.

---

##### `S3Path`<sup>Optional</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.s3Path"></a>

```go
S3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

### DmsDataProviderSettingsSybaseAseSettings <a name="DmsDataProviderSettingsSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsSybaseAseSettings {
	CertificateArn: *string,
	DatabaseName: *string,
	EncryptPassword: interface{},
	Port: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword">EncryptPassword</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `EncryptPassword`<sup>Optional</sup> <a name="EncryptPassword" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword"></a>

```go
EncryptPassword interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDataProviderSettingsDocDbSettingsList <a name="DmsDataProviderSettingsDocDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsDocDbSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderSettingsDocDbSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get"></a>

```go
func Get(index *f64) DmsDataProviderSettingsDocDbSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsDocDbSettingsOutputReference <a name="DmsDataProviderSettingsDocDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsDocDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderSettingsDocDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsIbmDb2LuwSettingsList <a name="DmsDataProviderSettingsIbmDb2LuwSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsIbmDb2LuwSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderSettingsIbmDb2LuwSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get"></a>

```go
func Get(index *f64) DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSecurityMechanism">ResetSecurityMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetEncryptionAlgorithm"></a>

```go
func ResetEncryptionAlgorithm()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3AccessRoleArn"></a>

```go
func ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetS3Path"></a>

```go
func ResetS3Path()
```

##### `ResetSecurityMechanism` <a name="ResetSecurityMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSecurityMechanism"></a>

```go
func ResetSecurityMechanism()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanismInput">SecurityMechanismInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanism">SecurityMechanism</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithmInput"></a>

```go
func EncryptionAlgorithmInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```go
func S3AccessRoleArnInput() *string
```

- *Type:* *string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3PathInput"></a>

```go
func S3PathInput() *string
```

- *Type:* *string

---

##### `SecurityMechanismInput`<sup>Optional</sup> <a name="SecurityMechanismInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanismInput"></a>

```go
func SecurityMechanismInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.encryptionAlgorithm"></a>

```go
func EncryptionAlgorithm() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3AccessRoleArn"></a>

```go
func S3AccessRoleArn() *string
```

- *Type:* *string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.s3Path"></a>

```go
func S3Path() *string
```

- *Type:* *string

---

##### `SecurityMechanism`<sup>Required</sup> <a name="SecurityMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.securityMechanism"></a>

```go
func SecurityMechanism() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsIbmDb2ZosSettingsList <a name="DmsDataProviderSettingsIbmDb2ZosSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsIbmDb2ZosSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderSettingsIbmDb2ZosSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get"></a>

```go
func Get(index *f64) DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsIbmDb2ZosSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3AccessRoleArn"></a>

```go
func ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetS3Path"></a>

```go
func ResetS3Path()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```go
func S3AccessRoleArnInput() *string
```

- *Type:* *string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3PathInput"></a>

```go
func S3PathInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3AccessRoleArn"></a>

```go
func S3AccessRoleArn() *string
```

- *Type:* *string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.s3Path"></a>

```go
func S3Path() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsList <a name="DmsDataProviderSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get"></a>

```go
func Get(index *f64) DmsDataProviderSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsMariaDbSettingsList <a name="DmsDataProviderSettingsMariaDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsMariaDbSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderSettingsMariaDbSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get"></a>

```go
func Get(index *f64) DmsDataProviderSettingsMariaDbSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsMariaDbSettingsOutputReference <a name="DmsDataProviderSettingsMariaDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsMariaDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderSettingsMariaDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3AccessRoleArn"></a>

```go
func ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetS3Path"></a>

```go
func ResetS3Path()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```go
func S3AccessRoleArnInput() *string
```

- *Type:* *string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3PathInput"></a>

```go
func S3PathInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3AccessRoleArn"></a>

```go
func S3AccessRoleArn() *string
```

- *Type:* *string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.s3Path"></a>

```go
func S3Path() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsMicrosoftSqlServerSettingsList <a name="DmsDataProviderSettingsMicrosoftSqlServerSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsMicrosoftSqlServerSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderSettingsMicrosoftSqlServerSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get"></a>

```go
func Get(index *f64) DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference <a name="DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3AccessRoleArn"></a>

```go
func ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetS3Path"></a>

```go
func ResetS3Path()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```go
func S3AccessRoleArnInput() *string
```

- *Type:* *string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3PathInput"></a>

```go
func S3PathInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3AccessRoleArn"></a>

```go
func S3AccessRoleArn() *string
```

- *Type:* *string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.s3Path"></a>

```go
func S3Path() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsMongoDbSettingsList <a name="DmsDataProviderSettingsMongoDbSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsMongoDbSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderSettingsMongoDbSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get"></a>

```go
func Get(index *f64) DmsDataProviderSettingsMongoDbSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsMongoDbSettingsOutputReference <a name="DmsDataProviderSettingsMongoDbSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsMongoDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderSettingsMongoDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism">ResetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource">ResetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthMechanism` <a name="ResetAuthMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism"></a>

```go
func ResetAuthMechanism()
```

##### `ResetAuthSource` <a name="ResetAuthSource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource"></a>

```go
func ResetAuthSource()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput">AuthMechanismInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput">AuthSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism">AuthMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource">AuthSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthMechanismInput`<sup>Optional</sup> <a name="AuthMechanismInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput"></a>

```go
func AuthMechanismInput() *string
```

- *Type:* *string

---

##### `AuthSourceInput`<sup>Optional</sup> <a name="AuthSourceInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput"></a>

```go
func AuthSourceInput() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `AuthMechanism`<sup>Required</sup> <a name="AuthMechanism" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism"></a>

```go
func AuthMechanism() *string
```

- *Type:* *string

---

##### `AuthSource`<sup>Required</sup> <a name="AuthSource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource"></a>

```go
func AuthSource() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsMysqlSettingsList <a name="DmsDataProviderSettingsMysqlSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsMysqlSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderSettingsMysqlSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get"></a>

```go
func Get(index *f64) DmsDataProviderSettingsMysqlSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsMysqlSettingsOutputReference <a name="DmsDataProviderSettingsMysqlSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsMysqlSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderSettingsMysqlSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3AccessRoleArn"></a>

```go
func ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetS3Path"></a>

```go
func ResetS3Path()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```go
func S3AccessRoleArnInput() *string
```

- *Type:* *string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3PathInput"></a>

```go
func S3PathInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3AccessRoleArn"></a>

```go
func S3AccessRoleArn() *string
```

- *Type:* *string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.s3Path"></a>

```go
func S3Path() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsOracleSettingsList <a name="DmsDataProviderSettingsOracleSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsOracleSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderSettingsOracleSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get"></a>

```go
func Get(index *f64) DmsDataProviderSettingsOracleSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsOracleSettingsOutputReference <a name="DmsDataProviderSettingsOracleSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsOracleSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderSettingsOracleSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer">ResetAsmServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn">ResetSecretsManagerOracleAsmAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId">ResetSecretsManagerOracleAsmSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn">ResetSecretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId">ResetSecretsManagerSecurityDbEncryptionSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAsmServer` <a name="ResetAsmServer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer"></a>

```go
func ResetAsmServer()
```

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3AccessRoleArn"></a>

```go
func ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetS3Path"></a>

```go
func ResetS3Path()
```

##### `ResetSecretsManagerOracleAsmAccessRoleArn` <a name="ResetSecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```go
func ResetSecretsManagerOracleAsmAccessRoleArn()
```

##### `ResetSecretsManagerOracleAsmSecretId` <a name="ResetSecretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```go
func ResetSecretsManagerOracleAsmSecretId()
```

##### `ResetSecretsManagerSecurityDbEncryptionAccessRoleArn` <a name="ResetSecretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```go
func ResetSecretsManagerSecurityDbEncryptionAccessRoleArn()
```

##### `ResetSecretsManagerSecurityDbEncryptionSecretId` <a name="ResetSecretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId"></a>

```go
func ResetSecretsManagerSecurityDbEncryptionSecretId()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput">AsmServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">SecretsManagerOracleAsmAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">SecretsManagerOracleAsmSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput">SecretsManagerSecurityDbEncryptionAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput">SecretsManagerSecurityDbEncryptionSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer">AsmServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn">SecretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId">SecretsManagerSecurityDbEncryptionSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AsmServerInput`<sup>Optional</sup> <a name="AsmServerInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput"></a>

```go
func AsmServerInput() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```go
func S3AccessRoleArnInput() *string
```

- *Type:* *string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3PathInput"></a>

```go
func S3PathInput() *string
```

- *Type:* *string

---

##### `SecretsManagerOracleAsmAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerOracleAsmAccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```go
func SecretsManagerOracleAsmAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerOracleAsmSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerOracleAsmSecretIdInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```go
func SecretsManagerOracleAsmSecretIdInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecurityDbEncryptionAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerSecurityDbEncryptionAccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput"></a>

```go
func SecretsManagerSecurityDbEncryptionAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecurityDbEncryptionSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecurityDbEncryptionSecretIdInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput"></a>

```go
func SecretsManagerSecurityDbEncryptionSecretIdInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `AsmServer`<sup>Required</sup> <a name="AsmServer" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer"></a>

```go
func AsmServer() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3AccessRoleArn"></a>

```go
func S3AccessRoleArn() *string
```

- *Type:* *string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.s3Path"></a>

```go
func S3Path() *string
```

- *Type:* *string

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```go
func SecretsManagerOracleAsmAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```go
func SecretsManagerOracleAsmSecretId() *string
```

- *Type:* *string

---

##### `SecretsManagerSecurityDbEncryptionAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```go
func SecretsManagerSecurityDbEncryptionAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecurityDbEncryptionSecretId`<sup>Required</sup> <a name="SecretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```go
func SecretsManagerSecurityDbEncryptionSecretId() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsOutputReference <a name="DmsDataProviderSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings">PutDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings">PutIbmDb2LuwSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings">PutIbmDb2ZosSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings">PutMariaDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings">PutMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings">PutMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings">PutMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings">PutOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings">PutPostgresqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings">PutRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings">PutSybaseAseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings">ResetDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings">ResetIbmDb2LuwSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZosSettings">ResetIbmDb2ZosSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings">ResetMariaDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings">ResetMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings">ResetMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMysqlSettings">ResetMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings">ResetOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgresqlSettings">ResetPostgresqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings">ResetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings">ResetSybaseAseSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDocDbSettings` <a name="PutDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings"></a>

```go
func PutDocDbSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIbmDb2LuwSettings` <a name="PutIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings"></a>

```go
func PutIbmDb2LuwSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIbmDb2ZosSettings` <a name="PutIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings"></a>

```go
func PutIbmDb2ZosSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZosSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMariaDbSettings` <a name="PutMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings"></a>

```go
func PutMariaDbSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMicrosoftSqlServerSettings` <a name="PutMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings"></a>

```go
func PutMicrosoftSqlServerSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMongoDbSettings` <a name="PutMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings"></a>

```go
func PutMongoDbSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMysqlSettings` <a name="PutMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings"></a>

```go
func PutMysqlSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMysqlSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOracleSettings` <a name="PutOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings"></a>

```go
func PutOracleSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPostgresqlSettings` <a name="PutPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings"></a>

```go
func PutPostgresqlSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgresqlSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRedshiftSettings` <a name="PutRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings"></a>

```go
func PutRedshiftSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSybaseAseSettings` <a name="PutSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings"></a>

```go
func PutSybaseAseSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDocDbSettings` <a name="ResetDocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings"></a>

```go
func ResetDocDbSettings()
```

##### `ResetIbmDb2LuwSettings` <a name="ResetIbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings"></a>

```go
func ResetIbmDb2LuwSettings()
```

##### `ResetIbmDb2ZosSettings` <a name="ResetIbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZosSettings"></a>

```go
func ResetIbmDb2ZosSettings()
```

##### `ResetMariaDbSettings` <a name="ResetMariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings"></a>

```go
func ResetMariaDbSettings()
```

##### `ResetMicrosoftSqlServerSettings` <a name="ResetMicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings"></a>

```go
func ResetMicrosoftSqlServerSettings()
```

##### `ResetMongoDbSettings` <a name="ResetMongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings"></a>

```go
func ResetMongoDbSettings()
```

##### `ResetMysqlSettings` <a name="ResetMysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMysqlSettings"></a>

```go
func ResetMysqlSettings()
```

##### `ResetOracleSettings` <a name="ResetOracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings"></a>

```go
func ResetOracleSettings()
```

##### `ResetPostgresqlSettings` <a name="ResetPostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgresqlSettings"></a>

```go
func ResetPostgresqlSettings()
```

##### `ResetRedshiftSettings` <a name="ResetRedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings"></a>

```go
func ResetRedshiftSettings()
```

##### `ResetSybaseAseSettings` <a name="ResetSybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings"></a>

```go
func ResetSybaseAseSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings">DocDbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList">DmsDataProviderSettingsDocDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings">IbmDb2LuwSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList">DmsDataProviderSettingsIbmDb2LuwSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettings">IbmDb2ZosSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList">DmsDataProviderSettingsIbmDb2ZosSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings">MariaDbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList">DmsDataProviderSettingsMariaDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings">MicrosoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList">DmsDataProviderSettingsMicrosoftSqlServerSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings">MongoDbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList">DmsDataProviderSettingsMongoDbSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettings">MysqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList">DmsDataProviderSettingsMysqlSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings">OracleSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList">DmsDataProviderSettingsOracleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettings">PostgresqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList">DmsDataProviderSettingsPostgresqlSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList">DmsDataProviderSettingsRedshiftSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings">SybaseAseSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList">DmsDataProviderSettingsSybaseAseSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput">DocDbSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput">IbmDb2LuwSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettingsInput">IbmDb2ZosSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput">MariaDbSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput">MicrosoftSqlServerSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput">MongoDbSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettingsInput">MysqlSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput">OracleSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettingsInput">PostgresqlSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput">RedshiftSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput">SybaseAseSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocDbSettings`<sup>Required</sup> <a name="DocDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings"></a>

```go
func DocDbSettings() DmsDataProviderSettingsDocDbSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsList">DmsDataProviderSettingsDocDbSettingsList</a>

---

##### `IbmDb2LuwSettings`<sup>Required</sup> <a name="IbmDb2LuwSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings"></a>

```go
func IbmDb2LuwSettings() DmsDataProviderSettingsIbmDb2LuwSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsList">DmsDataProviderSettingsIbmDb2LuwSettingsList</a>

---

##### `IbmDb2ZosSettings`<sup>Required</sup> <a name="IbmDb2ZosSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettings"></a>

```go
func IbmDb2ZosSettings() DmsDataProviderSettingsIbmDb2ZosSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZosSettingsList">DmsDataProviderSettingsIbmDb2ZosSettingsList</a>

---

##### `MariaDbSettings`<sup>Required</sup> <a name="MariaDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings"></a>

```go
func MariaDbSettings() DmsDataProviderSettingsMariaDbSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsList">DmsDataProviderSettingsMariaDbSettingsList</a>

---

##### `MicrosoftSqlServerSettings`<sup>Required</sup> <a name="MicrosoftSqlServerSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings"></a>

```go
func MicrosoftSqlServerSettings() DmsDataProviderSettingsMicrosoftSqlServerSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsList">DmsDataProviderSettingsMicrosoftSqlServerSettingsList</a>

---

##### `MongoDbSettings`<sup>Required</sup> <a name="MongoDbSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings"></a>

```go
func MongoDbSettings() DmsDataProviderSettingsMongoDbSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsList">DmsDataProviderSettingsMongoDbSettingsList</a>

---

##### `MysqlSettings`<sup>Required</sup> <a name="MysqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettings"></a>

```go
func MysqlSettings() DmsDataProviderSettingsMysqlSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsMysqlSettingsList">DmsDataProviderSettingsMysqlSettingsList</a>

---

##### `OracleSettings`<sup>Required</sup> <a name="OracleSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings"></a>

```go
func OracleSettings() DmsDataProviderSettingsOracleSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOracleSettingsList">DmsDataProviderSettingsOracleSettingsList</a>

---

##### `PostgresqlSettings`<sup>Required</sup> <a name="PostgresqlSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettings"></a>

```go
func PostgresqlSettings() DmsDataProviderSettingsPostgresqlSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList">DmsDataProviderSettingsPostgresqlSettingsList</a>

---

##### `RedshiftSettings`<sup>Required</sup> <a name="RedshiftSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings"></a>

```go
func RedshiftSettings() DmsDataProviderSettingsRedshiftSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList">DmsDataProviderSettingsRedshiftSettingsList</a>

---

##### `SybaseAseSettings`<sup>Required</sup> <a name="SybaseAseSettings" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings"></a>

```go
func SybaseAseSettings() DmsDataProviderSettingsSybaseAseSettingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList">DmsDataProviderSettingsSybaseAseSettingsList</a>

---

##### `DocDbSettingsInput`<sup>Optional</sup> <a name="DocDbSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput"></a>

```go
func DocDbSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `IbmDb2LuwSettingsInput`<sup>Optional</sup> <a name="IbmDb2LuwSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput"></a>

```go
func IbmDb2LuwSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `IbmDb2ZosSettingsInput`<sup>Optional</sup> <a name="IbmDb2ZosSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZosSettingsInput"></a>

```go
func IbmDb2ZosSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `MariaDbSettingsInput`<sup>Optional</sup> <a name="MariaDbSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput"></a>

```go
func MariaDbSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `MicrosoftSqlServerSettingsInput`<sup>Optional</sup> <a name="MicrosoftSqlServerSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput"></a>

```go
func MicrosoftSqlServerSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `MongoDbSettingsInput`<sup>Optional</sup> <a name="MongoDbSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput"></a>

```go
func MongoDbSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `MysqlSettingsInput`<sup>Optional</sup> <a name="MysqlSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mysqlSettingsInput"></a>

```go
func MysqlSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `OracleSettingsInput`<sup>Optional</sup> <a name="OracleSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput"></a>

```go
func OracleSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `PostgresqlSettingsInput`<sup>Optional</sup> <a name="PostgresqlSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgresqlSettingsInput"></a>

```go
func PostgresqlSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `RedshiftSettingsInput`<sup>Optional</sup> <a name="RedshiftSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput"></a>

```go
func RedshiftSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `SybaseAseSettingsInput`<sup>Optional</sup> <a name="SybaseAseSettingsInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput"></a>

```go
func SybaseAseSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsPostgresqlSettingsList <a name="DmsDataProviderSettingsPostgresqlSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsPostgresqlSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderSettingsPostgresqlSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get"></a>

```go
func Get(index *f64) DmsDataProviderSettingsPostgresqlSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsPostgresqlSettingsOutputReference <a name="DmsDataProviderSettingsPostgresqlSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsPostgresqlSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderSettingsPostgresqlSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3AccessRoleArn"></a>

```go
func ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetS3Path"></a>

```go
func ResetS3Path()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```go
func S3AccessRoleArnInput() *string
```

- *Type:* *string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3PathInput"></a>

```go
func S3PathInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3AccessRoleArn"></a>

```go
func S3AccessRoleArn() *string
```

- *Type:* *string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.s3Path"></a>

```go
func S3Path() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsPostgresqlSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsRedshiftSettingsList <a name="DmsDataProviderSettingsRedshiftSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsRedshiftSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderSettingsRedshiftSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get"></a>

```go
func Get(index *f64) DmsDataProviderSettingsRedshiftSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsRedshiftSettingsOutputReference <a name="DmsDataProviderSettingsRedshiftSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsRedshiftSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderSettingsRedshiftSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3AccessRoleArn">ResetS3AccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3Path">ResetS3Path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetS3AccessRoleArn` <a name="ResetS3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3AccessRoleArn"></a>

```go
func ResetS3AccessRoleArn()
```

##### `ResetS3Path` <a name="ResetS3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetS3Path"></a>

```go
func ResetS3Path()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArnInput">S3AccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3PathInput">S3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArn">S3AccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3Path">S3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArnInput`<sup>Optional</sup> <a name="S3AccessRoleArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArnInput"></a>

```go
func S3AccessRoleArnInput() *string
```

- *Type:* *string

---

##### `S3PathInput`<sup>Optional</sup> <a name="S3PathInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3PathInput"></a>

```go
func S3PathInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `S3AccessRoleArn`<sup>Required</sup> <a name="S3AccessRoleArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3AccessRoleArn"></a>

```go
func S3AccessRoleArn() *string
```

- *Type:* *string

---

##### `S3Path`<sup>Required</sup> <a name="S3Path" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.s3Path"></a>

```go
func S3Path() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsSybaseAseSettingsList <a name="DmsDataProviderSettingsSybaseAseSettingsList" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsSybaseAseSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderSettingsSybaseAseSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get"></a>

```go
func Get(index *f64) DmsDataProviderSettingsSybaseAseSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsSybaseAseSettingsOutputReference <a name="DmsDataProviderSettingsSybaseAseSettingsOutputReference" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsSybaseAseSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderSettingsSybaseAseSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword">ResetEncryptPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetEncryptPassword` <a name="ResetEncryptPassword" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword"></a>

```go
func ResetEncryptPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput">EncryptPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword">EncryptPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `EncryptPasswordInput`<sup>Optional</sup> <a name="EncryptPasswordInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput"></a>

```go
func EncryptPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `EncryptPassword`<sup>Required</sup> <a name="EncryptPassword" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword"></a>

```go
func EncryptPassword() interface{}
```

- *Type:* interface{}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



