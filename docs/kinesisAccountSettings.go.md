# `kinesisAccountSettings` Submodule <a name="`kinesisAccountSettings` Submodule" id="@cdktn/provider-aws.kinesisAccountSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisAccountSettings <a name="KinesisAccountSettings" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/kinesis_account_settings aws_kinesis_account_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/kinesisaccountsettings"

kinesisaccountsettings.NewKinesisAccountSettings(scope Construct, id *string, config KinesisAccountSettingsConfig) KinesisAccountSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig">KinesisAccountSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig">KinesisAccountSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.putMinimumThroughputBillingCommitment">PutMinimumThroughputBillingCommitment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetMinimumThroughputBillingCommitment">ResetMinimumThroughputBillingCommitment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMinimumThroughputBillingCommitment` <a name="PutMinimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.putMinimumThroughputBillingCommitment"></a>

```go
func PutMinimumThroughputBillingCommitment(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.putMinimumThroughputBillingCommitment.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMinimumThroughputBillingCommitment` <a name="ResetMinimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetMinimumThroughputBillingCommitment"></a>

```go
func ResetMinimumThroughputBillingCommitment()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisAccountSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/kinesisaccountsettings"

kinesisaccountsettings.KinesisAccountSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/kinesisaccountsettings"

kinesisaccountsettings.KinesisAccountSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/kinesisaccountsettings"

kinesisaccountsettings.KinesisAccountSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/kinesisaccountsettings"

kinesisaccountsettings.KinesisAccountSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KinesisAccountSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KinesisAccountSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KinesisAccountSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/kinesis_account_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KinesisAccountSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitment">MinimumThroughputBillingCommitment</a></code> | <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList">KinesisAccountSettingsMinimumThroughputBillingCommitmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitmentInput">MinimumThroughputBillingCommitmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MinimumThroughputBillingCommitment`<sup>Required</sup> <a name="MinimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitment"></a>

```go
func MinimumThroughputBillingCommitment() KinesisAccountSettingsMinimumThroughputBillingCommitmentList
```

- *Type:* <a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList">KinesisAccountSettingsMinimumThroughputBillingCommitmentList</a>

---

##### `MinimumThroughputBillingCommitmentInput`<sup>Optional</sup> <a name="MinimumThroughputBillingCommitmentInput" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.minimumThroughputBillingCommitmentInput"></a>

```go
func MinimumThroughputBillingCommitmentInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisAccountSettingsConfig <a name="KinesisAccountSettingsConfig" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/kinesisaccountsettings"

&kinesisaccountsettings.KinesisAccountSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MinimumThroughputBillingCommitment: interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.minimumThroughputBillingCommitment">MinimumThroughputBillingCommitment</a></code> | <code>interface{}</code> | minimum_throughput_billing_commitment block. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MinimumThroughputBillingCommitment`<sup>Optional</sup> <a name="MinimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.minimumThroughputBillingCommitment"></a>

```go
MinimumThroughputBillingCommitment interface{}
```

- *Type:* interface{}

minimum_throughput_billing_commitment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/kinesis_account_settings#minimum_throughput_billing_commitment KinesisAccountSettings#minimum_throughput_billing_commitment}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/kinesis_account_settings#region KinesisAccountSettings#region}

---

### KinesisAccountSettingsMinimumThroughputBillingCommitment <a name="KinesisAccountSettingsMinimumThroughputBillingCommitment" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/kinesisaccountsettings"

&kinesisaccountsettings.KinesisAccountSettingsMinimumThroughputBillingCommitment {
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/kinesis_account_settings#status KinesisAccountSettings#status}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitment.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/kinesis_account_settings#status KinesisAccountSettings#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisAccountSettingsMinimumThroughputBillingCommitmentList <a name="KinesisAccountSettingsMinimumThroughputBillingCommitmentList" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/kinesisaccountsettings"

kinesisaccountsettings.NewKinesisAccountSettingsMinimumThroughputBillingCommitmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KinesisAccountSettingsMinimumThroughputBillingCommitmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.get"></a>

```go
func Get(index *f64) KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference <a name="KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/kinesisaccountsettings"

kinesisaccountsettings.NewKinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.earliestAllowedEndAt">EarliestAllowedEndAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.endedAt">EndedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.startedAt">StartedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusActual">StatusActual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EarliestAllowedEndAt`<sup>Required</sup> <a name="EarliestAllowedEndAt" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.earliestAllowedEndAt"></a>

```go
func EarliestAllowedEndAt() *string
```

- *Type:* *string

---

##### `EndedAt`<sup>Required</sup> <a name="EndedAt" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.endedAt"></a>

```go
func EndedAt() *string
```

- *Type:* *string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.startedAt"></a>

```go
func StartedAt() *string
```

- *Type:* *string

---

##### `StatusActual`<sup>Required</sup> <a name="StatusActual" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusActual"></a>

```go
func StatusActual() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.kinesisAccountSettings.KinesisAccountSettingsMinimumThroughputBillingCommitmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



