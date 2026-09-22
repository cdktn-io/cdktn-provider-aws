# `mskChannel` Submodule <a name="`mskChannel` Submodule" id="@cdktn/provider-aws.mskChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskChannel <a name="MskChannel" id="@cdktn/provider-aws.mskChannel.MskChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel aws_msk_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannel(scope Construct, id *string, config MskChannelConfig) MskChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig">MskChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig">MskChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putIcebergDestination">PutIcebergDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putLoggingInfo">PutLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putTopicConfiguration">PutTopicConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetIcebergDestination">ResetIcebergDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetLoggingInfo">ResetLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetS3Destination">ResetS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetTopicConfiguration">ResetTopicConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.mskChannel.MskChannel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mskChannel.MskChannel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.mskChannel.MskChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mskChannel.MskChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.mskChannel.MskChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.mskChannel.MskChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.mskChannel.MskChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.mskChannel.MskChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.mskChannel.MskChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.mskChannel.MskChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.mskChannel.MskChannel.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mskChannel.MskChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.mskChannel.MskChannel.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.mskChannel.MskChannel.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskChannel.MskChannel.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskChannel.MskChannel.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.mskChannel.MskChannel.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskChannel.MskChannel.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.mskChannel.MskChannel.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mskChannel.MskChannel.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannel.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.mskChannel.MskChannel.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mskChannel.MskChannel.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putEncryptionConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIcebergDestination` <a name="PutIcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannel.putIcebergDestination"></a>

```go
func PutIcebergDestination(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putIcebergDestination.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLoggingInfo` <a name="PutLoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannel.putLoggingInfo"></a>

```go
func PutLoggingInfo(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putLoggingInfo.parameter.value"></a>

- *Type:* interface{}

---

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktn/provider-aws.mskChannel.MskChannel.putS3Destination"></a>

```go
func PutS3Destination(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putS3Destination.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts"></a>

```go
func PutTimeouts(value MskChannelTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

---

##### `PutTopicConfiguration` <a name="PutTopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.putTopicConfiguration"></a>

```go
func PutTopicConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannel.putTopicConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetIcebergDestination` <a name="ResetIcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannel.resetIcebergDestination"></a>

```go
func ResetIcebergDestination()
```

##### `ResetLoggingInfo` <a name="ResetLoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannel.resetLoggingInfo"></a>

```go
func ResetLoggingInfo()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.mskChannel.MskChannel.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetS3Destination` <a name="ResetS3Destination" id="@cdktn/provider-aws.mskChannel.MskChannel.resetS3Destination"></a>

```go
func ResetS3Destination()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.mskChannel.MskChannel.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTopicConfiguration` <a name="ResetTopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.resetTopicConfiguration"></a>

```go
func ResetTopicConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.mskChannel.MskChannel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.MskChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskChannel.MskChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.MskChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.MskChannel_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.MskChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MskChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MskChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MskChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList">MskChannelEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestination">IcebergDestination</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList">MskChannelIcebergDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfo">LoggingInfo</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList">MskChannelLoggingInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList">MskChannelS3DestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference">MskChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfiguration">TopicConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList">MskChannelTopicConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArnInput">ClusterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestinationInput">IcebergDestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfoInput">LoggingInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.s3DestinationInput">S3DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfigurationInput">TopicConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.mskChannel.MskChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.mskChannel.MskChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.mskChannel.MskChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.mskChannel.MskChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.mskChannel.MskChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.mskChannel.MskChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mskChannel.MskChannel.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mskChannel.MskChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mskChannel.MskChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mskChannel.MskChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mskChannel.MskChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mskChannel.MskChannel.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-aws.mskChannel.MskChannel.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() MskChannelEncryptionConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList">MskChannelEncryptionConfigurationList</a>

---

##### `IcebergDestination`<sup>Required</sup> <a name="IcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestination"></a>

```go
func IcebergDestination() MskChannelIcebergDestinationList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList">MskChannelIcebergDestinationList</a>

---

##### `LoggingInfo`<sup>Required</sup> <a name="LoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfo"></a>

```go
func LoggingInfo() MskChannelLoggingInfoList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList">MskChannelLoggingInfoList</a>

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-aws.mskChannel.MskChannel.property.s3Destination"></a>

```go
func S3Destination() MskChannelS3DestinationList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList">MskChannelS3DestinationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.property.timeouts"></a>

```go
func Timeouts() MskChannelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference">MskChannelTimeoutsOutputReference</a>

---

##### `TopicConfiguration`<sup>Required</sup> <a name="TopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfiguration"></a>

```go
func TopicConfiguration() MskChannelTopicConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList">MskChannelTopicConfigurationList</a>

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArnInput"></a>

```go
func ClusterArnInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IcebergDestinationInput`<sup>Optional</sup> <a name="IcebergDestinationInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestinationInput"></a>

```go
func IcebergDestinationInput() interface{}
```

- *Type:* interface{}

---

##### `LoggingInfoInput`<sup>Optional</sup> <a name="LoggingInfoInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfoInput"></a>

```go
func LoggingInfoInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.s3DestinationInput"></a>

```go
func S3DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TopicConfigurationInput`<sup>Optional</sup> <a name="TopicConfigurationInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfigurationInput"></a>

```go
func TopicConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-aws.mskChannel.MskChannel.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.mskChannel.MskChannel.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MskChannelConfig <a name="MskChannelConfig" id="@cdktn/provider-aws.mskChannel.MskChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelName: *string,
	ClusterArn: *string,
	EncryptionConfiguration: interface{},
	IcebergDestination: interface{},
	LoggingInfo: interface{},
	Region: *string,
	S3Destination: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v25.mskChannel.MskChannelTimeouts,
	TopicConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code>interface{}</code> | encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.icebergDestination">IcebergDestination</a></code> | <code>interface{}</code> | iceberg_destination block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.loggingInfo">LoggingInfo</a></code> | <code>interface{}</code> | logging_info block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.s3Destination">S3Destination</a></code> | <code>interface{}</code> | s3_destination block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.topicConfiguration">TopicConfiguration</a></code> | <code>interface{}</code> | topic_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}.

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.clusterArn"></a>

```go
ClusterArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration interface{}
```

- *Type:* interface{}

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#encryption_configuration MskChannel#encryption_configuration}

---

##### `IcebergDestination`<sup>Optional</sup> <a name="IcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.icebergDestination"></a>

```go
IcebergDestination interface{}
```

- *Type:* interface{}

iceberg_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#iceberg_destination MskChannel#iceberg_destination}

---

##### `LoggingInfo`<sup>Optional</sup> <a name="LoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.loggingInfo"></a>

```go
LoggingInfo interface{}
```

- *Type:* interface{}

logging_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#logging_info MskChannel#logging_info}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#region MskChannel#region}

---

##### `S3Destination`<sup>Optional</sup> <a name="S3Destination" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.s3Destination"></a>

```go
S3Destination interface{}
```

- *Type:* interface{}

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#s3_destination MskChannel#s3_destination}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.timeouts"></a>

```go
Timeouts MskChannelTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#timeouts MskChannel#timeouts}

---

##### `TopicConfiguration`<sup>Optional</sup> <a name="TopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.topicConfiguration"></a>

```go
TopicConfiguration interface{}
```

- *Type:* interface{}

topic_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_configuration MskChannel#topic_configuration}

---

### MskChannelEncryptionConfiguration <a name="MskChannelEncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelEncryptionConfiguration {
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}. |

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}.

---

### MskChannelIcebergDestination <a name="MskChannelIcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelIcebergDestination {
	AppendOnly: interface{},
	ServiceExecutionRoleArn: *string,
	Catalog: interface{},
	CompressionType: *string,
	DataFreshnessInSeconds: *f64,
	DeadLetterQueueS3: interface{},
	DestinationTable: interface{},
	SchemaEvolution: interface{},
	TableCreation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.appendOnly">AppendOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#append_only MskChannel#append_only}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.catalog">Catalog</a></code> | <code>interface{}</code> | catalog block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.compressionType">CompressionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.deadLetterQueueS3">DeadLetterQueueS3</a></code> | <code>interface{}</code> | dead_letter_queue_s3 block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.destinationTable">DestinationTable</a></code> | <code>interface{}</code> | destination_table block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.schemaEvolution">SchemaEvolution</a></code> | <code>interface{}</code> | schema_evolution block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.tableCreation">TableCreation</a></code> | <code>interface{}</code> | table_creation block. |

---

##### `AppendOnly`<sup>Required</sup> <a name="AppendOnly" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.appendOnly"></a>

```go
AppendOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#append_only MskChannel#append_only}.

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.serviceExecutionRoleArn"></a>

```go
ServiceExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.catalog"></a>

```go
Catalog interface{}
```

- *Type:* interface{}

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog MskChannel#catalog}

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}.

---

##### `DataFreshnessInSeconds`<sup>Optional</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.dataFreshnessInSeconds"></a>

```go
DataFreshnessInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}.

---

##### `DeadLetterQueueS3`<sup>Optional</sup> <a name="DeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.deadLetterQueueS3"></a>

```go
DeadLetterQueueS3 interface{}
```

- *Type:* interface{}

dead_letter_queue_s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `DestinationTable`<sup>Optional</sup> <a name="DestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.destinationTable"></a>

```go
DestinationTable interface{}
```

- *Type:* interface{}

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table MskChannel#destination_table}

---

##### `SchemaEvolution`<sup>Optional</sup> <a name="SchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.schemaEvolution"></a>

```go
SchemaEvolution interface{}
```

- *Type:* interface{}

schema_evolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#schema_evolution MskChannel#schema_evolution}

---

##### `TableCreation`<sup>Optional</sup> <a name="TableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.tableCreation"></a>

```go
TableCreation interface{}
```

- *Type:* interface{}

table_creation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#table_creation MskChannel#table_creation}

---

### MskChannelIcebergDestinationCatalog <a name="MskChannelIcebergDestinationCatalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelIcebergDestinationCatalog {
	CatalogArn: *string,
	WarehouseLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.catalogArn">CatalogArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.warehouseLocation">WarehouseLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}. |

---

##### `CatalogArn`<sup>Optional</sup> <a name="CatalogArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.catalogArn"></a>

```go
CatalogArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}.

---

##### `WarehouseLocation`<sup>Optional</sup> <a name="WarehouseLocation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.warehouseLocation"></a>

```go
WarehouseLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}.

---

### MskChannelIcebergDestinationDeadLetterQueueS3 <a name="MskChannelIcebergDestinationDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelIcebergDestinationDeadLetterQueueS3 {
	BucketArn: *string,
	ErrorOutputPrefix: *string,
	ExpectedBucketOwner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.bucketArn">BucketArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}. |

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}.

---

##### `ErrorOutputPrefix`<sup>Optional</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```go
ErrorOutputPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}.

---

### MskChannelIcebergDestinationDestinationTable <a name="MskChannelIcebergDestinationDestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelIcebergDestinationDestinationTable {
	DestinationDatabaseName: *string,
	DestinationTableName: *string,
	PartitionSpec: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationDatabaseName">DestinationDatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_database_name MskChannel#destination_database_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationTableName">DestinationTableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table_name MskChannel#destination_table_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.partitionSpec">PartitionSpec</a></code> | <code>interface{}</code> | partition_spec block. |

---

##### `DestinationDatabaseName`<sup>Optional</sup> <a name="DestinationDatabaseName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationDatabaseName"></a>

```go
DestinationDatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_database_name MskChannel#destination_database_name}.

---

##### `DestinationTableName`<sup>Optional</sup> <a name="DestinationTableName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationTableName"></a>

```go
DestinationTableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table_name MskChannel#destination_table_name}.

---

##### `PartitionSpec`<sup>Optional</sup> <a name="PartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.partitionSpec"></a>

```go
PartitionSpec interface{}
```

- *Type:* interface{}

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_spec MskChannel#partition_spec}

---

### MskChannelIcebergDestinationDestinationTablePartitionSpec <a name="MskChannelIcebergDestinationDestinationTablePartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelIcebergDestinationDestinationTablePartitionSpec {
	PartitionStrategy: *string,
	Source: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.partitionStrategy">PartitionStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.source">Source</a></code> | <code>interface{}</code> | source block. |

---

##### `PartitionStrategy`<sup>Required</sup> <a name="PartitionStrategy" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.partitionStrategy"></a>

```go
PartitionStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.source"></a>

```go
Source interface{}
```

- *Type:* interface{}

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source MskChannel#source}

---

### MskChannelIcebergDestinationDestinationTablePartitionSpecSource <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecSource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource {
	SourceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource.property.sourceName">SourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source_name MskChannel#source_name}. |

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource.property.sourceName"></a>

```go
SourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source_name MskChannel#source_name}.

---

### MskChannelIcebergDestinationSchemaEvolution <a name="MskChannelIcebergDestinationSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelIcebergDestinationSchemaEvolution {
	EnableSchemaEvolution: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution.property.enableSchemaEvolution">EnableSchemaEvolution</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}. |

---

##### `EnableSchemaEvolution`<sup>Optional</sup> <a name="EnableSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution.property.enableSchemaEvolution"></a>

```go
EnableSchemaEvolution interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}.

---

### MskChannelIcebergDestinationTableCreation <a name="MskChannelIcebergDestinationTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelIcebergDestinationTableCreation {
	EnableTableCreation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation.property.enableTableCreation">EnableTableCreation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}. |

---

##### `EnableTableCreation`<sup>Optional</sup> <a name="EnableTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation.property.enableTableCreation"></a>

```go
EnableTableCreation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}.

---

### MskChannelLoggingInfo <a name="MskChannelLoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelLoggingInfo {
	CloudwatchLogs: interface{},
	Firehose: interface{},
	S3: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code>interface{}</code> | cloudwatch_logs block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.firehose">Firehose</a></code> | <code>interface{}</code> | firehose block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.s3">S3</a></code> | <code>interface{}</code> | s3 block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs"></a>

```go
CloudwatchLogs interface{}
```

- *Type:* interface{}

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cloudwatch_logs MskChannel#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.firehose"></a>

```go
Firehose interface{}
```

- *Type:* interface{}

firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#firehose MskChannel#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.s3"></a>

```go
S3 interface{}
```

- *Type:* interface{}

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#s3 MskChannel#s3}

---

### MskChannelLoggingInfoCloudwatchLogs <a name="MskChannelLoggingInfoCloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelLoggingInfoCloudwatchLogs {
	Enabled: interface{},
	LogGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#log_group MskChannel#log_group}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}.

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#log_group MskChannel#log_group}.

---

### MskChannelLoggingInfoFirehose <a name="MskChannelLoggingInfoFirehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelLoggingInfoFirehose {
	Enabled: interface{},
	DeliveryStream: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}.

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream"></a>

```go
DeliveryStream *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}.

---

### MskChannelLoggingInfoS3 <a name="MskChannelLoggingInfoS3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelLoggingInfoS3 {
	Enabled: interface{},
	Bucket: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket MskChannel#bucket}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#prefix MskChannel#prefix}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket MskChannel#bucket}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#prefix MskChannel#prefix}.

---

### MskChannelS3Destination <a name="MskChannelS3Destination" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelS3Destination {
	ServiceExecutionRoleArn: *string,
	DataFreshnessInSeconds: *f64,
	DeadLetterQueueS3: interface{},
	Storage: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.deadLetterQueueS3">DeadLetterQueueS3</a></code> | <code>interface{}</code> | dead_letter_queue_s3 block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.storage">Storage</a></code> | <code>interface{}</code> | storage block. |

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.serviceExecutionRoleArn"></a>

```go
ServiceExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}.

---

##### `DataFreshnessInSeconds`<sup>Optional</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.dataFreshnessInSeconds"></a>

```go
DataFreshnessInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}.

---

##### `DeadLetterQueueS3`<sup>Optional</sup> <a name="DeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.deadLetterQueueS3"></a>

```go
DeadLetterQueueS3 interface{}
```

- *Type:* interface{}

dead_letter_queue_s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.storage"></a>

```go
Storage interface{}
```

- *Type:* interface{}

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage MskChannel#storage}

---

### MskChannelS3DestinationDeadLetterQueueS3 <a name="MskChannelS3DestinationDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelS3DestinationDeadLetterQueueS3 {
	BucketArn: *string,
	ErrorOutputPrefix: *string,
	ExpectedBucketOwner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.bucketArn">BucketArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}. |

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}.

---

##### `ErrorOutputPrefix`<sup>Optional</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```go
ErrorOutputPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}.

---

### MskChannelS3DestinationStorage <a name="MskChannelS3DestinationStorage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelS3DestinationStorage {
	BucketArn: *string,
	CompressionType: *string,
	StorageClass: *string,
	ExpectedBucketOwner: *string,
	OutputKeyTemplate: *string,
	OutputPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.bucketArn">BucketArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.compressionType">CompressionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.storageClass">StorageClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputKeyTemplate">OutputKeyTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputPrefix">OutputPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}. |

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}.

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.compressionType"></a>

```go
CompressionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}.

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}.

---

##### `OutputKeyTemplate`<sup>Optional</sup> <a name="OutputKeyTemplate" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputKeyTemplate"></a>

```go
OutputKeyTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}.

---

##### `OutputPrefix`<sup>Optional</sup> <a name="OutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputPrefix"></a>

```go
OutputPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}.

---

### MskChannelTimeouts <a name="MskChannelTimeouts" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#create MskChannel#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delete MskChannel#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#update MskChannel#update}

---

### MskChannelTopicConfiguration <a name="MskChannelTopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelTopicConfiguration {
	TopicArn: *string,
	RecordConverter: interface{},
	RecordSchema: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.topicArn">TopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_arn MskChannel#topic_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordConverter">RecordConverter</a></code> | <code>interface{}</code> | record_converter block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordSchema">RecordSchema</a></code> | <code>interface{}</code> | record_schema block. |

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_arn MskChannel#topic_arn}.

---

##### `RecordConverter`<sup>Optional</sup> <a name="RecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordConverter"></a>

```go
RecordConverter interface{}
```

- *Type:* interface{}

record_converter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#record_converter MskChannel#record_converter}

---

##### `RecordSchema`<sup>Optional</sup> <a name="RecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordSchema"></a>

```go
RecordSchema interface{}
```

- *Type:* interface{}

record_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#record_schema MskChannel#record_schema}

---

### MskChannelTopicConfigurationRecordConverter <a name="MskChannelTopicConfigurationRecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelTopicConfigurationRecordConverter {
	ValueConverter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter.property.valueConverter">ValueConverter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}. |

---

##### `ValueConverter`<sup>Required</sup> <a name="ValueConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter.property.valueConverter"></a>

```go
ValueConverter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}.

---

### MskChannelTopicConfigurationRecordSchema <a name="MskChannelTopicConfigurationRecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

&mskchannel.MskChannelTopicConfigurationRecordSchema {
	GsrArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema.property.gsrArn">GsrArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}. |

---

##### `GsrArn`<sup>Required</sup> <a name="GsrArn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema.property.gsrArn"></a>

```go
GsrArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskChannelEncryptionConfigurationList <a name="MskChannelEncryptionConfigurationList" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelEncryptionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelEncryptionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.get"></a>

```go
func Get(index *f64) MskChannelEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelEncryptionConfigurationOutputReference <a name="MskChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationCatalogList <a name="MskChannelIcebergDestinationCatalogList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationCatalogList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelIcebergDestinationCatalogList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.get"></a>

```go
func Get(index *f64) MskChannelIcebergDestinationCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationCatalogOutputReference <a name="MskChannelIcebergDestinationCatalogOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationCatalogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelIcebergDestinationCatalogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetCatalogArn">ResetCatalogArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetWarehouseLocation">ResetWarehouseLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogArn` <a name="ResetCatalogArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetCatalogArn"></a>

```go
func ResetCatalogArn()
```

##### `ResetWarehouseLocation` <a name="ResetWarehouseLocation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetWarehouseLocation"></a>

```go
func ResetWarehouseLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArnInput">CatalogArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocationInput">WarehouseLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArn">CatalogArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocation">WarehouseLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogArnInput`<sup>Optional</sup> <a name="CatalogArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArnInput"></a>

```go
func CatalogArnInput() *string
```

- *Type:* *string

---

##### `WarehouseLocationInput`<sup>Optional</sup> <a name="WarehouseLocationInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocationInput"></a>

```go
func WarehouseLocationInput() *string
```

- *Type:* *string

---

##### `CatalogArn`<sup>Required</sup> <a name="CatalogArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArn"></a>

```go
func CatalogArn() *string
```

- *Type:* *string

---

##### `WarehouseLocation`<sup>Required</sup> <a name="WarehouseLocation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocation"></a>

```go
func WarehouseLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationDeadLetterQueueS3List <a name="MskChannelIcebergDestinationDeadLetterQueueS3List" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationDeadLetterQueueS3List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelIcebergDestinationDeadLetterQueueS3List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.get"></a>

```go
func Get(index *f64) MskChannelIcebergDestinationDeadLetterQueueS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationDeadLetterQueueS3OutputReference <a name="MskChannelIcebergDestinationDeadLetterQueueS3OutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationDeadLetterQueueS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelIcebergDestinationDeadLetterQueueS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">ResetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorOutputPrefix` <a name="ResetErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```go
func ResetErrorOutputPrefix()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">ErrorOutputPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `ErrorOutputPrefixInput`<sup>Optional</sup> <a name="ErrorOutputPrefixInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```go
func ErrorOutputPrefixInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `ErrorOutputPrefix`<sup>Required</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```go
func ErrorOutputPrefix() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationDestinationTableList <a name="MskChannelIcebergDestinationDestinationTableList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationDestinationTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelIcebergDestinationDestinationTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.get"></a>

```go
func Get(index *f64) MskChannelIcebergDestinationDestinationTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationDestinationTableOutputReference <a name="MskChannelIcebergDestinationDestinationTableOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationDestinationTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelIcebergDestinationDestinationTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.putPartitionSpec">PutPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationDatabaseName">ResetDestinationDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationTableName">ResetDestinationTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetPartitionSpec">ResetPartitionSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartitionSpec` <a name="PutPartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.putPartitionSpec"></a>

```go
func PutPartitionSpec(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.putPartitionSpec.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinationDatabaseName` <a name="ResetDestinationDatabaseName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationDatabaseName"></a>

```go
func ResetDestinationDatabaseName()
```

##### `ResetDestinationTableName` <a name="ResetDestinationTableName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationTableName"></a>

```go
func ResetDestinationTableName()
```

##### `ResetPartitionSpec` <a name="ResetPartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetPartitionSpec"></a>

```go
func ResetPartitionSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpec">PartitionSpec</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList">MskChannelIcebergDestinationDestinationTablePartitionSpecList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseNameInput">DestinationDatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableNameInput">DestinationTableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpecInput">PartitionSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseName">DestinationDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableName">DestinationTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PartitionSpec`<sup>Required</sup> <a name="PartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpec"></a>

```go
func PartitionSpec() MskChannelIcebergDestinationDestinationTablePartitionSpecList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList">MskChannelIcebergDestinationDestinationTablePartitionSpecList</a>

---

##### `DestinationDatabaseNameInput`<sup>Optional</sup> <a name="DestinationDatabaseNameInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseNameInput"></a>

```go
func DestinationDatabaseNameInput() *string
```

- *Type:* *string

---

##### `DestinationTableNameInput`<sup>Optional</sup> <a name="DestinationTableNameInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableNameInput"></a>

```go
func DestinationTableNameInput() *string
```

- *Type:* *string

---

##### `PartitionSpecInput`<sup>Optional</sup> <a name="PartitionSpecInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpecInput"></a>

```go
func PartitionSpecInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationDatabaseName`<sup>Required</sup> <a name="DestinationDatabaseName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseName"></a>

```go
func DestinationDatabaseName() *string
```

- *Type:* *string

---

##### `DestinationTableName`<sup>Required</sup> <a name="DestinationTableName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableName"></a>

```go
func DestinationTableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecList <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationDestinationTablePartitionSpecList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelIcebergDestinationDestinationTablePartitionSpecList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.get"></a>

```go
func Get(index *f64) MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.putSource"></a>

```go
func PutSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.putSource.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList">MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategyInput">PartitionStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategy">PartitionStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.source"></a>

```go
func Source() MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList">MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList</a>

---

##### `PartitionStrategyInput`<sup>Optional</sup> <a name="PartitionStrategyInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategyInput"></a>

```go
func PartitionStrategyInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `PartitionStrategy`<sup>Required</sup> <a name="PartitionStrategy" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategy"></a>

```go
func PartitionStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationDestinationTablePartitionSpecSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.get"></a>

```go
func Get(index *f64) MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resetSourceName">ResetSourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceName` <a name="ResetSourceName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resetSourceName"></a>

```go
func ResetSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceNameInput"></a>

```go
func SourceNameInput() *string
```

- *Type:* *string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationList <a name="MskChannelIcebergDestinationList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelIcebergDestinationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.get"></a>

```go
func Get(index *f64) MskChannelIcebergDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationOutputReference <a name="MskChannelIcebergDestinationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelIcebergDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putCatalog">PutCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDeadLetterQueueS3">PutDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDestinationTable">PutDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putSchemaEvolution">PutSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putTableCreation">PutTableCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDataFreshnessInSeconds">ResetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDeadLetterQueueS3">ResetDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDestinationTable">ResetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetSchemaEvolution">ResetSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetTableCreation">ResetTableCreation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalog` <a name="PutCatalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putCatalog"></a>

```go
func PutCatalog(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putCatalog.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeadLetterQueueS3` <a name="PutDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDeadLetterQueueS3"></a>

```go
func PutDeadLetterQueueS3(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDeadLetterQueueS3.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDestinationTable` <a name="PutDestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDestinationTable"></a>

```go
func PutDestinationTable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchemaEvolution` <a name="PutSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putSchemaEvolution"></a>

```go
func PutSchemaEvolution(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putSchemaEvolution.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTableCreation` <a name="PutTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putTableCreation"></a>

```go
func PutTableCreation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putTableCreation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCompressionType"></a>

```go
func ResetCompressionType()
```

##### `ResetDataFreshnessInSeconds` <a name="ResetDataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDataFreshnessInSeconds"></a>

```go
func ResetDataFreshnessInSeconds()
```

##### `ResetDeadLetterQueueS3` <a name="ResetDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDeadLetterQueueS3"></a>

```go
func ResetDeadLetterQueueS3()
```

##### `ResetDestinationTable` <a name="ResetDestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDestinationTable"></a>

```go
func ResetDestinationTable()
```

##### `ResetSchemaEvolution` <a name="ResetSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetSchemaEvolution"></a>

```go
func ResetSchemaEvolution()
```

##### `ResetTableCreation` <a name="ResetTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetTableCreation"></a>

```go
func ResetTableCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList">MskChannelIcebergDestinationCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3">DeadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List">MskChannelIcebergDestinationDeadLetterQueueS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList">MskChannelIcebergDestinationDestinationTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolution">SchemaEvolution</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList">MskChannelIcebergDestinationSchemaEvolutionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreation">TableCreation</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList">MskChannelIcebergDestinationTableCreationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnlyInput">AppendOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalogInput">CatalogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSecondsInput">DataFreshnessInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3Input">DeadLetterQueueS3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTableInput">DestinationTableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolutionInput">SchemaEvolutionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArnInput">ServiceExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreationInput">TableCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnly">AppendOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalog"></a>

```go
func Catalog() MskChannelIcebergDestinationCatalogList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList">MskChannelIcebergDestinationCatalogList</a>

---

##### `DeadLetterQueueS3`<sup>Required</sup> <a name="DeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3"></a>

```go
func DeadLetterQueueS3() MskChannelIcebergDestinationDeadLetterQueueS3List
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List">MskChannelIcebergDestinationDeadLetterQueueS3List</a>

---

##### `DestinationTable`<sup>Required</sup> <a name="DestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTable"></a>

```go
func DestinationTable() MskChannelIcebergDestinationDestinationTableList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList">MskChannelIcebergDestinationDestinationTableList</a>

---

##### `SchemaEvolution`<sup>Required</sup> <a name="SchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolution"></a>

```go
func SchemaEvolution() MskChannelIcebergDestinationSchemaEvolutionList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList">MskChannelIcebergDestinationSchemaEvolutionList</a>

---

##### `TableCreation`<sup>Required</sup> <a name="TableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreation"></a>

```go
func TableCreation() MskChannelIcebergDestinationTableCreationList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList">MskChannelIcebergDestinationTableCreationList</a>

---

##### `AppendOnlyInput`<sup>Optional</sup> <a name="AppendOnlyInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnlyInput"></a>

```go
func AppendOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalogInput"></a>

```go
func CatalogInput() interface{}
```

- *Type:* interface{}

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `DataFreshnessInSecondsInput`<sup>Optional</sup> <a name="DataFreshnessInSecondsInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSecondsInput"></a>

```go
func DataFreshnessInSecondsInput() *f64
```

- *Type:* *f64

---

##### `DeadLetterQueueS3Input`<sup>Optional</sup> <a name="DeadLetterQueueS3Input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3Input"></a>

```go
func DeadLetterQueueS3Input() interface{}
```

- *Type:* interface{}

---

##### `DestinationTableInput`<sup>Optional</sup> <a name="DestinationTableInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTableInput"></a>

```go
func DestinationTableInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaEvolutionInput`<sup>Optional</sup> <a name="SchemaEvolutionInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolutionInput"></a>

```go
func SchemaEvolutionInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceExecutionRoleArnInput`<sup>Optional</sup> <a name="ServiceExecutionRoleArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArnInput"></a>

```go
func ServiceExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `TableCreationInput`<sup>Optional</sup> <a name="TableCreationInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreationInput"></a>

```go
func TableCreationInput() interface{}
```

- *Type:* interface{}

---

##### `AppendOnly`<sup>Required</sup> <a name="AppendOnly" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnly"></a>

```go
func AppendOnly() interface{}
```

- *Type:* interface{}

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `DataFreshnessInSeconds`<sup>Required</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSeconds"></a>

```go
func DataFreshnessInSeconds() *f64
```

- *Type:* *f64

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArn"></a>

```go
func ServiceExecutionRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationSchemaEvolutionList <a name="MskChannelIcebergDestinationSchemaEvolutionList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationSchemaEvolutionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelIcebergDestinationSchemaEvolutionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.get"></a>

```go
func Get(index *f64) MskChannelIcebergDestinationSchemaEvolutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationSchemaEvolutionOutputReference <a name="MskChannelIcebergDestinationSchemaEvolutionOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationSchemaEvolutionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelIcebergDestinationSchemaEvolutionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resetEnableSchemaEvolution">ResetEnableSchemaEvolution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableSchemaEvolution` <a name="ResetEnableSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resetEnableSchemaEvolution"></a>

```go
func ResetEnableSchemaEvolution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput">EnableSchemaEvolutionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolution">EnableSchemaEvolution</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableSchemaEvolutionInput`<sup>Optional</sup> <a name="EnableSchemaEvolutionInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput"></a>

```go
func EnableSchemaEvolutionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSchemaEvolution`<sup>Required</sup> <a name="EnableSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolution"></a>

```go
func EnableSchemaEvolution() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationTableCreationList <a name="MskChannelIcebergDestinationTableCreationList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationTableCreationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelIcebergDestinationTableCreationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.get"></a>

```go
func Get(index *f64) MskChannelIcebergDestinationTableCreationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelIcebergDestinationTableCreationOutputReference <a name="MskChannelIcebergDestinationTableCreationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelIcebergDestinationTableCreationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelIcebergDestinationTableCreationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resetEnableTableCreation">ResetEnableTableCreation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableTableCreation` <a name="ResetEnableTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resetEnableTableCreation"></a>

```go
func ResetEnableTableCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreationInput">EnableTableCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreation">EnableTableCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableTableCreationInput`<sup>Optional</sup> <a name="EnableTableCreationInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreationInput"></a>

```go
func EnableTableCreationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableTableCreation`<sup>Required</sup> <a name="EnableTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreation"></a>

```go
func EnableTableCreation() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelLoggingInfoCloudwatchLogsList <a name="MskChannelLoggingInfoCloudwatchLogsList" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelLoggingInfoCloudwatchLogsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelLoggingInfoCloudwatchLogsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.get"></a>

```go
func Get(index *f64) MskChannelLoggingInfoCloudwatchLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelLoggingInfoCloudwatchLogsOutputReference <a name="MskChannelLoggingInfoCloudwatchLogsOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelLoggingInfoCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelLoggingInfoCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup"></a>

```go
func ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelLoggingInfoFirehoseList <a name="MskChannelLoggingInfoFirehoseList" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelLoggingInfoFirehoseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelLoggingInfoFirehoseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.get"></a>

```go
func Get(index *f64) MskChannelLoggingInfoFirehoseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelLoggingInfoFirehoseOutputReference <a name="MskChannelLoggingInfoFirehoseOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelLoggingInfoFirehoseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelLoggingInfoFirehoseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream"></a>

```go
func ResetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput"></a>

```go
func DeliveryStreamInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream"></a>

```go
func DeliveryStream() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelLoggingInfoList <a name="MskChannelLoggingInfoList" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelLoggingInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelLoggingInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.get"></a>

```go
func Get(index *f64) MskChannelLoggingInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelLoggingInfoOutputReference <a name="MskChannelLoggingInfoOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelLoggingInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelLoggingInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs"></a>

```go
func PutCloudwatchLogs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose"></a>

```go
func PutFirehose(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose.parameter.value"></a>

- *Type:* interface{}

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putS3"></a>

```go
func PutS3(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putS3.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs"></a>

```go
func ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose"></a>

```go
func ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList">MskChannelLoggingInfoCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList">MskChannelLoggingInfoFirehoseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List">MskChannelLoggingInfoS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() MskChannelLoggingInfoCloudwatchLogsList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList">MskChannelLoggingInfoCloudwatchLogsList</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose"></a>

```go
func Firehose() MskChannelLoggingInfoFirehoseList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList">MskChannelLoggingInfoFirehoseList</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3"></a>

```go
func S3() MskChannelLoggingInfoS3List
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List">MskChannelLoggingInfoS3List</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput"></a>

```go
func CloudwatchLogsInput() interface{}
```

- *Type:* interface{}

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput"></a>

```go
func FirehoseInput() interface{}
```

- *Type:* interface{}

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelLoggingInfoS3List <a name="MskChannelLoggingInfoS3List" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelLoggingInfoS3List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelLoggingInfoS3List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.get"></a>

```go
func Get(index *f64) MskChannelLoggingInfoS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelLoggingInfoS3OutputReference <a name="MskChannelLoggingInfoS3OutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelLoggingInfoS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelLoggingInfoS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelS3DestinationDeadLetterQueueS3List <a name="MskChannelS3DestinationDeadLetterQueueS3List" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelS3DestinationDeadLetterQueueS3List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelS3DestinationDeadLetterQueueS3List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.get"></a>

```go
func Get(index *f64) MskChannelS3DestinationDeadLetterQueueS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelS3DestinationDeadLetterQueueS3OutputReference <a name="MskChannelS3DestinationDeadLetterQueueS3OutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelS3DestinationDeadLetterQueueS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelS3DestinationDeadLetterQueueS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">ResetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorOutputPrefix` <a name="ResetErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```go
func ResetErrorOutputPrefix()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">ErrorOutputPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `ErrorOutputPrefixInput`<sup>Optional</sup> <a name="ErrorOutputPrefixInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```go
func ErrorOutputPrefixInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `ErrorOutputPrefix`<sup>Required</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```go
func ErrorOutputPrefix() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelS3DestinationList <a name="MskChannelS3DestinationList" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelS3DestinationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelS3DestinationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.get"></a>

```go
func Get(index *f64) MskChannelS3DestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelS3DestinationOutputReference <a name="MskChannelS3DestinationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelS3DestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelS3DestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putDeadLetterQueueS3">PutDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDataFreshnessInSeconds">ResetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDeadLetterQueueS3">ResetDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetStorage">ResetStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeadLetterQueueS3` <a name="PutDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putDeadLetterQueueS3"></a>

```go
func PutDeadLetterQueueS3(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putDeadLetterQueueS3.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStorage` <a name="PutStorage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putStorage"></a>

```go
func PutStorage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putStorage.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataFreshnessInSeconds` <a name="ResetDataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDataFreshnessInSeconds"></a>

```go
func ResetDataFreshnessInSeconds()
```

##### `ResetDeadLetterQueueS3` <a name="ResetDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDeadLetterQueueS3"></a>

```go
func ResetDeadLetterQueueS3()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetStorage"></a>

```go
func ResetStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3">DeadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List">MskChannelS3DestinationDeadLetterQueueS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList">MskChannelS3DestinationStorageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSecondsInput">DataFreshnessInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3Input">DeadLetterQueueS3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArnInput">ServiceExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storageInput">StorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeadLetterQueueS3`<sup>Required</sup> <a name="DeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3"></a>

```go
func DeadLetterQueueS3() MskChannelS3DestinationDeadLetterQueueS3List
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List">MskChannelS3DestinationDeadLetterQueueS3List</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storage"></a>

```go
func Storage() MskChannelS3DestinationStorageList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList">MskChannelS3DestinationStorageList</a>

---

##### `DataFreshnessInSecondsInput`<sup>Optional</sup> <a name="DataFreshnessInSecondsInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSecondsInput"></a>

```go
func DataFreshnessInSecondsInput() *f64
```

- *Type:* *f64

---

##### `DeadLetterQueueS3Input`<sup>Optional</sup> <a name="DeadLetterQueueS3Input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3Input"></a>

```go
func DeadLetterQueueS3Input() interface{}
```

- *Type:* interface{}

---

##### `ServiceExecutionRoleArnInput`<sup>Optional</sup> <a name="ServiceExecutionRoleArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArnInput"></a>

```go
func ServiceExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storageInput"></a>

```go
func StorageInput() interface{}
```

- *Type:* interface{}

---

##### `DataFreshnessInSeconds`<sup>Required</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSeconds"></a>

```go
func DataFreshnessInSeconds() *f64
```

- *Type:* *f64

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArn"></a>

```go
func ServiceExecutionRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelS3DestinationStorageList <a name="MskChannelS3DestinationStorageList" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelS3DestinationStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelS3DestinationStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.get"></a>

```go
func Get(index *f64) MskChannelS3DestinationStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelS3DestinationStorageOutputReference <a name="MskChannelS3DestinationStorageOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelS3DestinationStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelS3DestinationStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputKeyTemplate">ResetOutputKeyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputPrefix">ResetOutputPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetOutputKeyTemplate` <a name="ResetOutputKeyTemplate" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputKeyTemplate"></a>

```go
func ResetOutputKeyTemplate()
```

##### `ResetOutputPrefix` <a name="ResetOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputPrefix"></a>

```go
func ResetOutputPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplateInput">OutputKeyTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefixInput">OutputPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplate">OutputKeyTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefix">OutputPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionTypeInput"></a>

```go
func CompressionTypeInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `OutputKeyTemplateInput`<sup>Optional</sup> <a name="OutputKeyTemplateInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplateInput"></a>

```go
func OutputKeyTemplateInput() *string
```

- *Type:* *string

---

##### `OutputPrefixInput`<sup>Optional</sup> <a name="OutputPrefixInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefixInput"></a>

```go
func OutputPrefixInput() *string
```

- *Type:* *string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `OutputKeyTemplate`<sup>Required</sup> <a name="OutputKeyTemplate" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplate"></a>

```go
func OutputKeyTemplate() *string
```

- *Type:* *string

---

##### `OutputPrefix`<sup>Required</sup> <a name="OutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefix"></a>

```go
func OutputPrefix() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelTimeoutsOutputReference <a name="MskChannelTimeoutsOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskChannelTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelTopicConfigurationList <a name="MskChannelTopicConfigurationList" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelTopicConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelTopicConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.get"></a>

```go
func Get(index *f64) MskChannelTopicConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelTopicConfigurationOutputReference <a name="MskChannelTopicConfigurationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelTopicConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelTopicConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordConverter">PutRecordConverter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordSchema">PutRecordSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordConverter">ResetRecordConverter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordSchema">ResetRecordSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecordConverter` <a name="PutRecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordConverter"></a>

```go
func PutRecordConverter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordConverter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRecordSchema` <a name="PutRecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordSchema"></a>

```go
func PutRecordSchema(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordSchema.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRecordConverter` <a name="ResetRecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordConverter"></a>

```go
func ResetRecordConverter()
```

##### `ResetRecordSchema` <a name="ResetRecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordSchema"></a>

```go
func ResetRecordSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverter">RecordConverter</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList">MskChannelTopicConfigurationRecordConverterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchema">RecordSchema</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList">MskChannelTopicConfigurationRecordSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverterInput">RecordConverterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchemaInput">RecordSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecordConverter`<sup>Required</sup> <a name="RecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverter"></a>

```go
func RecordConverter() MskChannelTopicConfigurationRecordConverterList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList">MskChannelTopicConfigurationRecordConverterList</a>

---

##### `RecordSchema`<sup>Required</sup> <a name="RecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchema"></a>

```go
func RecordSchema() MskChannelTopicConfigurationRecordSchemaList
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList">MskChannelTopicConfigurationRecordSchemaList</a>

---

##### `RecordConverterInput`<sup>Optional</sup> <a name="RecordConverterInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverterInput"></a>

```go
func RecordConverterInput() interface{}
```

- *Type:* interface{}

---

##### `RecordSchemaInput`<sup>Optional</sup> <a name="RecordSchemaInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchemaInput"></a>

```go
func RecordSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelTopicConfigurationRecordConverterList <a name="MskChannelTopicConfigurationRecordConverterList" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelTopicConfigurationRecordConverterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelTopicConfigurationRecordConverterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.get"></a>

```go
func Get(index *f64) MskChannelTopicConfigurationRecordConverterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelTopicConfigurationRecordConverterOutputReference <a name="MskChannelTopicConfigurationRecordConverterOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelTopicConfigurationRecordConverterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelTopicConfigurationRecordConverterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverterInput">ValueConverterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverter">ValueConverter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueConverterInput`<sup>Optional</sup> <a name="ValueConverterInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverterInput"></a>

```go
func ValueConverterInput() *string
```

- *Type:* *string

---

##### `ValueConverter`<sup>Required</sup> <a name="ValueConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverter"></a>

```go
func ValueConverter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelTopicConfigurationRecordSchemaList <a name="MskChannelTopicConfigurationRecordSchemaList" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelTopicConfigurationRecordSchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskChannelTopicConfigurationRecordSchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.get"></a>

```go
func Get(index *f64) MskChannelTopicConfigurationRecordSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskChannelTopicConfigurationRecordSchemaOutputReference <a name="MskChannelTopicConfigurationRecordSchemaOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/mskchannel"

mskchannel.NewMskChannelTopicConfigurationRecordSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskChannelTopicConfigurationRecordSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArnInput">GsrArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArn">GsrArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GsrArnInput`<sup>Optional</sup> <a name="GsrArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArnInput"></a>

```go
func GsrArnInput() *string
```

- *Type:* *string

---

##### `GsrArn`<sup>Required</sup> <a name="GsrArn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArn"></a>

```go
func GsrArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



