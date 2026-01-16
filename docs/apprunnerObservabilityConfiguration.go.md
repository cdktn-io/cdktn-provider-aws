# `apprunnerObservabilityConfiguration` Submodule <a name="`apprunnerObservabilityConfiguration` Submodule" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerObservabilityConfiguration <a name="ApprunnerObservabilityConfiguration" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration aws_apprunner_observability_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.NewApprunnerObservabilityConfiguration(scope Construct, id *string, config ApprunnerObservabilityConfigurationConfig) ApprunnerObservabilityConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig">ApprunnerObservabilityConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig">ApprunnerObservabilityConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTraceConfiguration">PutTraceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTraceConfiguration">ResetTraceConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTraceConfiguration` <a name="PutTraceConfiguration" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTraceConfiguration"></a>

```go
func PutTraceConfiguration(value ApprunnerObservabilityConfigurationTraceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.putTraceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTraceConfiguration` <a name="ResetTraceConfiguration" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.resetTraceConfiguration"></a>

```go
func ResetTraceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApprunnerObservabilityConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.ApprunnerObservabilityConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.ApprunnerObservabilityConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.ApprunnerObservabilityConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.ApprunnerObservabilityConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApprunnerObservabilityConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApprunnerObservabilityConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApprunnerObservabilityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApprunnerObservabilityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.latest">Latest</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision">ObservabilityConfigurationRevision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfiguration">TraceConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference">ApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationNameInput">ObservabilityConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfigurationInput">TraceConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationName">ObservabilityConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Latest`<sup>Required</sup> <a name="Latest" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.latest"></a>

```go
func Latest() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ObservabilityConfigurationRevision`<sup>Required</sup> <a name="ObservabilityConfigurationRevision" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision"></a>

```go
func ObservabilityConfigurationRevision() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TraceConfiguration`<sup>Required</sup> <a name="TraceConfiguration" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfiguration"></a>

```go
func TraceConfiguration() ApprunnerObservabilityConfigurationTraceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference">ApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ObservabilityConfigurationNameInput`<sup>Optional</sup> <a name="ObservabilityConfigurationNameInput" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationNameInput"></a>

```go
func ObservabilityConfigurationNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TraceConfigurationInput`<sup>Optional</sup> <a name="TraceConfigurationInput" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.traceConfigurationInput"></a>

```go
func TraceConfigurationInput() ApprunnerObservabilityConfigurationTraceConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ObservabilityConfigurationName`<sup>Required</sup> <a name="ObservabilityConfigurationName" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.observabilityConfigurationName"></a>

```go
func ObservabilityConfigurationName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerObservabilityConfigurationConfig <a name="ApprunnerObservabilityConfigurationConfig" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/apprunnerobservabilityconfiguration"

&apprunnerobservabilityconfiguration.ApprunnerObservabilityConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ObservabilityConfigurationName: *string,
	Id: *string,
	Region: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TraceConfiguration: github.com/cdktn-io/cdktn-provider-aws-go/aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.observabilityConfigurationName">ObservabilityConfigurationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#id ApprunnerObservabilityConfiguration#id}. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#tags_all ApprunnerObservabilityConfiguration#tags_all}. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.traceConfiguration">TraceConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a></code> | trace_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ObservabilityConfigurationName`<sup>Required</sup> <a name="ObservabilityConfigurationName" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.observabilityConfigurationName"></a>

```go
ObservabilityConfigurationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#id ApprunnerObservabilityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#region ApprunnerObservabilityConfiguration#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#tags_all ApprunnerObservabilityConfiguration#tags_all}.

---

##### `TraceConfiguration`<sup>Optional</sup> <a name="TraceConfiguration" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationConfig.property.traceConfiguration"></a>

```go
TraceConfiguration ApprunnerObservabilityConfigurationTraceConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

trace_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#trace_configuration ApprunnerObservabilityConfiguration#trace_configuration}

---

### ApprunnerObservabilityConfigurationTraceConfiguration <a name="ApprunnerObservabilityConfigurationTraceConfiguration" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/apprunnerobservabilityconfiguration"

&apprunnerobservabilityconfiguration.ApprunnerObservabilityConfigurationTraceConfiguration {
	Vendor: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration.property.vendor">Vendor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#vendor ApprunnerObservabilityConfiguration#vendor}. |

---

##### `Vendor`<sup>Optional</sup> <a name="Vendor" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration.property.vendor"></a>

```go
Vendor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_observability_configuration#vendor ApprunnerObservabilityConfiguration#vendor}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerObservabilityConfigurationTraceConfigurationOutputReference <a name="ApprunnerObservabilityConfigurationTraceConfigurationOutputReference" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/apprunnerobservabilityconfiguration"

apprunnerobservabilityconfiguration.NewApprunnerObservabilityConfigurationTraceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApprunnerObservabilityConfigurationTraceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resetVendor">ResetVendor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVendor` <a name="ResetVendor" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resetVendor"></a>

```go
func ResetVendor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendorInput">VendorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VendorInput`<sup>Optional</sup> <a name="VendorInput" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendorInput"></a>

```go
func VendorInput() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerObservabilityConfigurationTraceConfiguration
```

- *Type:* <a href="#@cdktn/provider-aws.apprunnerObservabilityConfiguration.ApprunnerObservabilityConfigurationTraceConfiguration">ApprunnerObservabilityConfigurationTraceConfiguration</a>

---



