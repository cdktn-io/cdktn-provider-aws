# `s3FilesSynchronizationConfiguration` Submodule <a name="`s3FilesSynchronizationConfiguration` Submodule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesSynchronizationConfiguration <a name="S3FilesSynchronizationConfiguration" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration aws_s3files_synchronization_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3filessynchronizationconfiguration"

s3filessynchronizationconfiguration.NewS3FilesSynchronizationConfiguration(scope Construct, id *string, config S3FilesSynchronizationConfigurationConfig) S3FilesSynchronizationConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig">S3FilesSynchronizationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig">S3FilesSynchronizationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule">PutExpirationDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule">PutImportDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetExpirationDataRule">ResetExpirationDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetImportDataRule">ResetImportDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetLatestVersionNumber">ResetLatestVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExpirationDataRule` <a name="PutExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule"></a>

```go
func PutExpirationDataRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutImportDataRule` <a name="PutImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule"></a>

```go
func PutImportDataRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExpirationDataRule` <a name="ResetExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetExpirationDataRule"></a>

```go
func ResetExpirationDataRule()
```

##### `ResetImportDataRule` <a name="ResetImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetImportDataRule"></a>

```go
func ResetImportDataRule()
```

##### `ResetLatestVersionNumber` <a name="ResetLatestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetLatestVersionNumber"></a>

```go
func ResetLatestVersionNumber()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3FilesSynchronizationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3filessynchronizationconfiguration"

s3filessynchronizationconfiguration.S3FilesSynchronizationConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3filessynchronizationconfiguration"

s3filessynchronizationconfiguration.S3FilesSynchronizationConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3filessynchronizationconfiguration"

s3filessynchronizationconfiguration.S3FilesSynchronizationConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3filessynchronizationconfiguration"

s3filessynchronizationconfiguration.S3FilesSynchronizationConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a S3FilesSynchronizationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3FilesSynchronizationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3FilesSynchronizationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesSynchronizationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRule">ExpirationDataRule</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList">S3FilesSynchronizationConfigurationExpirationDataRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRule">ImportDataRule</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList">S3FilesSynchronizationConfigurationImportDataRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRuleInput">ExpirationDataRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRuleInput">ImportDataRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumberInput">LatestVersionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumber">LatestVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExpirationDataRule`<sup>Required</sup> <a name="ExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRule"></a>

```go
func ExpirationDataRule() S3FilesSynchronizationConfigurationExpirationDataRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList">S3FilesSynchronizationConfigurationExpirationDataRuleList</a>

---

##### `ImportDataRule`<sup>Required</sup> <a name="ImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRule"></a>

```go
func ImportDataRule() S3FilesSynchronizationConfigurationImportDataRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList">S3FilesSynchronizationConfigurationImportDataRuleList</a>

---

##### `ExpirationDataRuleInput`<sup>Optional</sup> <a name="ExpirationDataRuleInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRuleInput"></a>

```go
func ExpirationDataRuleInput() interface{}
```

- *Type:* interface{}

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemIdInput"></a>

```go
func FileSystemIdInput() *string
```

- *Type:* *string

---

##### `ImportDataRuleInput`<sup>Optional</sup> <a name="ImportDataRuleInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRuleInput"></a>

```go
func ImportDataRuleInput() interface{}
```

- *Type:* interface{}

---

##### `LatestVersionNumberInput`<sup>Optional</sup> <a name="LatestVersionNumberInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumberInput"></a>

```go
func LatestVersionNumberInput() *f64
```

- *Type:* *f64

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `LatestVersionNumber`<sup>Required</sup> <a name="LatestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumber"></a>

```go
func LatestVersionNumber() *f64
```

- *Type:* *f64

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesSynchronizationConfigurationConfig <a name="S3FilesSynchronizationConfigurationConfig" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3filessynchronizationconfiguration"

&s3filessynchronizationconfiguration.S3FilesSynchronizationConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FileSystemId: *string,
	ExpirationDataRule: interface{},
	ImportDataRule: interface{},
	LatestVersionNumber: *f64,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.expirationDataRule">ExpirationDataRule</a></code> | <code>interface{}</code> | expiration_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.importDataRule">ImportDataRule</a></code> | <code>interface{}</code> | import_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.latestVersionNumber">LatestVersionNumber</a></code> | <code>*f64</code> | Latest version number for optimistic locking. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.fileSystemId"></a>

```go
FileSystemId *string
```

- *Type:* *string

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration#file_system_id S3FilesSynchronizationConfiguration#file_system_id}

---

##### `ExpirationDataRule`<sup>Optional</sup> <a name="ExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.expirationDataRule"></a>

```go
ExpirationDataRule interface{}
```

- *Type:* interface{}

expiration_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration#expiration_data_rule S3FilesSynchronizationConfiguration#expiration_data_rule}

---

##### `ImportDataRule`<sup>Optional</sup> <a name="ImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.importDataRule"></a>

```go
ImportDataRule interface{}
```

- *Type:* interface{}

import_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration#import_data_rule S3FilesSynchronizationConfiguration#import_data_rule}

---

##### `LatestVersionNumber`<sup>Optional</sup> <a name="LatestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.latestVersionNumber"></a>

```go
LatestVersionNumber *f64
```

- *Type:* *f64

Latest version number for optimistic locking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration#latest_version_number S3FilesSynchronizationConfiguration#latest_version_number}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration#region S3FilesSynchronizationConfiguration#region}

---

### S3FilesSynchronizationConfigurationExpirationDataRule <a name="S3FilesSynchronizationConfigurationExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3filessynchronizationconfiguration"

&s3filessynchronizationconfiguration.S3FilesSynchronizationConfigurationExpirationDataRule {
	DaysAfterLastAccess: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.property.daysAfterLastAccess">DaysAfterLastAccess</a></code> | <code>*f64</code> | Days after last access before data expires. |

---

##### `DaysAfterLastAccess`<sup>Required</sup> <a name="DaysAfterLastAccess" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.property.daysAfterLastAccess"></a>

```go
DaysAfterLastAccess *f64
```

- *Type:* *f64

Days after last access before data expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration#days_after_last_access S3FilesSynchronizationConfiguration#days_after_last_access}

---

### S3FilesSynchronizationConfigurationImportDataRule <a name="S3FilesSynchronizationConfigurationImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3filessynchronizationconfiguration"

&s3filessynchronizationconfiguration.S3FilesSynchronizationConfigurationImportDataRule {
	Prefix: *string,
	SizeLessThan: *f64,
	Trigger: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.prefix">Prefix</a></code> | <code>*string</code> | S3 prefix for import. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.sizeLessThan">SizeLessThan</a></code> | <code>*f64</code> | Maximum file size to import. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.trigger">Trigger</a></code> | <code>*string</code> | Import trigger type. |

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

S3 prefix for import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration#prefix S3FilesSynchronizationConfiguration#prefix}

---

##### `SizeLessThan`<sup>Required</sup> <a name="SizeLessThan" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.sizeLessThan"></a>

```go
SizeLessThan *f64
```

- *Type:* *f64

Maximum file size to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration#size_less_than S3FilesSynchronizationConfiguration#size_less_than}

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.trigger"></a>

```go
Trigger *string
```

- *Type:* *string

Import trigger type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_synchronization_configuration#trigger S3FilesSynchronizationConfiguration#trigger}

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesSynchronizationConfigurationExpirationDataRuleList <a name="S3FilesSynchronizationConfigurationExpirationDataRuleList" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3filessynchronizationconfiguration"

s3filessynchronizationconfiguration.NewS3FilesSynchronizationConfigurationExpirationDataRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3FilesSynchronizationConfigurationExpirationDataRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get"></a>

```go
func Get(index *f64) S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference <a name="S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3filessynchronizationconfiguration"

s3filessynchronizationconfiguration.NewS3FilesSynchronizationConfigurationExpirationDataRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccessInput">DaysAfterLastAccessInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccess">DaysAfterLastAccess</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysAfterLastAccessInput`<sup>Optional</sup> <a name="DaysAfterLastAccessInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccessInput"></a>

```go
func DaysAfterLastAccessInput() *f64
```

- *Type:* *f64

---

##### `DaysAfterLastAccess`<sup>Required</sup> <a name="DaysAfterLastAccess" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccess"></a>

```go
func DaysAfterLastAccess() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3FilesSynchronizationConfigurationImportDataRuleList <a name="S3FilesSynchronizationConfigurationImportDataRuleList" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3filessynchronizationconfiguration"

s3filessynchronizationconfiguration.NewS3FilesSynchronizationConfigurationImportDataRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3FilesSynchronizationConfigurationImportDataRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get"></a>

```go
func Get(index *f64) S3FilesSynchronizationConfigurationImportDataRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3FilesSynchronizationConfigurationImportDataRuleOutputReference <a name="S3FilesSynchronizationConfigurationImportDataRuleOutputReference" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/s3filessynchronizationconfiguration"

s3filessynchronizationconfiguration.NewS3FilesSynchronizationConfigurationImportDataRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3FilesSynchronizationConfigurationImportDataRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThanInput">SizeLessThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.triggerInput">TriggerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThan">SizeLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.trigger">Trigger</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SizeLessThanInput`<sup>Optional</sup> <a name="SizeLessThanInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThanInput"></a>

```go
func SizeLessThanInput() *f64
```

- *Type:* *f64

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.triggerInput"></a>

```go
func TriggerInput() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `SizeLessThan`<sup>Required</sup> <a name="SizeLessThan" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThan"></a>

```go
func SizeLessThan() *f64
```

- *Type:* *f64

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.trigger"></a>

```go
func Trigger() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



