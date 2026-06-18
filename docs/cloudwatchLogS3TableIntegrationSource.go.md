# `cloudwatchLogS3TableIntegrationSource` Submodule <a name="`cloudwatchLogS3TableIntegrationSource` Submodule" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogS3TableIntegrationSource <a name="CloudwatchLogS3TableIntegrationSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source aws_cloudwatch_log_s3_table_integration_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/cloudwatchlogs3tableintegrationsource"

cloudwatchlogs3tableintegrationsource.NewCloudwatchLogS3TableIntegrationSource(scope Construct, id *string, config CloudwatchLogS3TableIntegrationSourceConfig) CloudwatchLogS3TableIntegrationSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig">CloudwatchLogS3TableIntegrationSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig">CloudwatchLogS3TableIntegrationSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putDataSource">PutDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetDataSource">ResetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataSource` <a name="PutDataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putDataSource"></a>

```go
func PutDataSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putDataSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putTimeouts"></a>

```go
func PutTimeouts(value CloudwatchLogS3TableIntegrationSourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

---

##### `ResetDataSource` <a name="ResetDataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetDataSource"></a>

```go
func ResetDataSource()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchLogS3TableIntegrationSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/cloudwatchlogs3tableintegrationsource"

cloudwatchlogs3tableintegrationsource.CloudwatchLogS3TableIntegrationSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/cloudwatchlogs3tableintegrationsource"

cloudwatchlogs3tableintegrationsource.CloudwatchLogS3TableIntegrationSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/cloudwatchlogs3tableintegrationsource"

cloudwatchlogs3tableintegrationsource.CloudwatchLogS3TableIntegrationSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/cloudwatchlogs3tableintegrationsource"

cloudwatchlogs3tableintegrationsource.CloudwatchLogS3TableIntegrationSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudwatchLogS3TableIntegrationSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchLogS3TableIntegrationSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchLogS3TableIntegrationSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchLogS3TableIntegrationSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSource">DataSource</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList">CloudwatchLogS3TableIntegrationSourceDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference">CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSourceInput">DataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArnInput">IntegrationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArn">IntegrationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSource"></a>

```go
func DataSource() CloudwatchLogS3TableIntegrationSourceDataSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList">CloudwatchLogS3TableIntegrationSourceDataSourceList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeouts"></a>

```go
func Timeouts() CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference">CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference</a>

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSourceInput"></a>

```go
func DataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `IntegrationArnInput`<sup>Optional</sup> <a name="IntegrationArnInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArnInput"></a>

```go
func IntegrationArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `IntegrationArn`<sup>Required</sup> <a name="IntegrationArn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArn"></a>

```go
func IntegrationArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogS3TableIntegrationSourceConfig <a name="CloudwatchLogS3TableIntegrationSourceConfig" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/cloudwatchlogs3tableintegrationsource"

&cloudwatchlogs3tableintegrationsource.CloudwatchLogS3TableIntegrationSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IntegrationArn: *string,
	DataSource: interface{},
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v24.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.integrationArn">IntegrationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#integration_arn CloudwatchLogS3TableIntegrationSource#integration_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dataSource">DataSource</a></code> | <code>interface{}</code> | data_source block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IntegrationArn`<sup>Required</sup> <a name="IntegrationArn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.integrationArn"></a>

```go
IntegrationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#integration_arn CloudwatchLogS3TableIntegrationSource#integration_arn}.

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dataSource"></a>

```go
DataSource interface{}
```

- *Type:* interface{}

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#data_source CloudwatchLogS3TableIntegrationSource#data_source}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#region CloudwatchLogS3TableIntegrationSource#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.timeouts"></a>

```go
Timeouts CloudwatchLogS3TableIntegrationSourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#timeouts CloudwatchLogS3TableIntegrationSource#timeouts}

---

### CloudwatchLogS3TableIntegrationSourceDataSource <a name="CloudwatchLogS3TableIntegrationSourceDataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/cloudwatchlogs3tableintegrationsource"

&cloudwatchlogs3tableintegrationsource.CloudwatchLogS3TableIntegrationSourceDataSource {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#name CloudwatchLogS3TableIntegrationSource#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#type CloudwatchLogS3TableIntegrationSource#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#name CloudwatchLogS3TableIntegrationSource#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#type CloudwatchLogS3TableIntegrationSource#type}.

---

### CloudwatchLogS3TableIntegrationSourceTimeouts <a name="CloudwatchLogS3TableIntegrationSourceTimeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/cloudwatchlogs3tableintegrationsource"

&cloudwatchlogs3tableintegrationsource.CloudwatchLogS3TableIntegrationSourceTimeouts {
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/cloudwatch_log_s3_table_integration_source#delete CloudwatchLogS3TableIntegrationSource#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogS3TableIntegrationSourceDataSourceList <a name="CloudwatchLogS3TableIntegrationSourceDataSourceList" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/cloudwatchlogs3tableintegrationsource"

cloudwatchlogs3tableintegrationsource.NewCloudwatchLogS3TableIntegrationSourceDataSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchLogS3TableIntegrationSourceDataSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.get"></a>

```go
func Get(index *f64) CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference <a name="CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/cloudwatchlogs3tableintegrationsource"

cloudwatchlogs3tableintegrationsource.NewCloudwatchLogS3TableIntegrationSourceDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference <a name="CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/cloudwatchlogs3tableintegrationsource"

cloudwatchlogs3tableintegrationsource.NewCloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



