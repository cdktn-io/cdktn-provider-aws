# `prometheusScraperLoggingConfiguration` Submodule <a name="`prometheusScraperLoggingConfiguration` Submodule" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusScraperLoggingConfiguration <a name="PrometheusScraperLoggingConfiguration" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration aws_prometheus_scraper_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

prometheusscraperloggingconfiguration.NewPrometheusScraperLoggingConfiguration(scope Construct, id *string, config PrometheusScraperLoggingConfigurationConfig) PrometheusScraperLoggingConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig">PrometheusScraperLoggingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig">PrometheusScraperLoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putLoggingDestination">PutLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetLoggingDestination">ResetLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetScraperComponents">ResetScraperComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingDestination` <a name="PutLoggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putLoggingDestination"></a>

```go
func PutLoggingDestination(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putLoggingDestination.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value PrometheusScraperLoggingConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

---

##### `ResetLoggingDestination` <a name="ResetLoggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetLoggingDestination"></a>

```go
func ResetLoggingDestination()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScraperComponents` <a name="ResetScraperComponents" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetScraperComponents"></a>

```go
func ResetScraperComponents()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PrometheusScraperLoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

prometheusscraperloggingconfiguration.PrometheusScraperLoggingConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

prometheusscraperloggingconfiguration.PrometheusScraperLoggingConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

prometheusscraperloggingconfiguration.PrometheusScraperLoggingConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

prometheusscraperloggingconfiguration.PrometheusScraperLoggingConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PrometheusScraperLoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PrometheusScraperLoggingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PrometheusScraperLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PrometheusScraperLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestination">LoggingDestination</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList">PrometheusScraperLoggingConfigurationLoggingDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference">PrometheusScraperLoggingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestinationInput">LoggingDestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponentsInput">ScraperComponentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperIdInput">ScraperIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponents">ScraperComponents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperId">ScraperId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LoggingDestination`<sup>Required</sup> <a name="LoggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestination"></a>

```go
func LoggingDestination() PrometheusScraperLoggingConfigurationLoggingDestinationList
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList">PrometheusScraperLoggingConfigurationLoggingDestinationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeouts"></a>

```go
func Timeouts() PrometheusScraperLoggingConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference">PrometheusScraperLoggingConfigurationTimeoutsOutputReference</a>

---

##### `LoggingDestinationInput`<sup>Optional</sup> <a name="LoggingDestinationInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestinationInput"></a>

```go
func LoggingDestinationInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ScraperComponentsInput`<sup>Optional</sup> <a name="ScraperComponentsInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponentsInput"></a>

```go
func ScraperComponentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScraperIdInput`<sup>Optional</sup> <a name="ScraperIdInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperIdInput"></a>

```go
func ScraperIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ScraperComponents`<sup>Required</sup> <a name="ScraperComponents" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponents"></a>

```go
func ScraperComponents() *[]*string
```

- *Type:* *[]*string

---

##### `ScraperId`<sup>Required</sup> <a name="ScraperId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperId"></a>

```go
func ScraperId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusScraperLoggingConfigurationConfig <a name="PrometheusScraperLoggingConfigurationConfig" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

&prometheusscraperloggingconfiguration.PrometheusScraperLoggingConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ScraperId: *string,
	LoggingDestination: interface{},
	Region: *string,
	ScraperComponents: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v25.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperId">ScraperId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.loggingDestination">LoggingDestination</a></code> | <code>interface{}</code> | logging_destination block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperComponents">ScraperComponents</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScraperId`<sup>Required</sup> <a name="ScraperId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperId"></a>

```go
ScraperId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}.

---

##### `LoggingDestination`<sup>Optional</sup> <a name="LoggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.loggingDestination"></a>

```go
LoggingDestination interface{}
```

- *Type:* interface{}

logging_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#logging_destination PrometheusScraperLoggingConfiguration#logging_destination}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#region PrometheusScraperLoggingConfiguration#region}

---

##### `ScraperComponents`<sup>Optional</sup> <a name="ScraperComponents" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperComponents"></a>

```go
ScraperComponents *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.timeouts"></a>

```go
Timeouts PrometheusScraperLoggingConfigurationTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#timeouts PrometheusScraperLoggingConfiguration#timeouts}

---

### PrometheusScraperLoggingConfigurationLoggingDestination <a name="PrometheusScraperLoggingConfigurationLoggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

&prometheusscraperloggingconfiguration.PrometheusScraperLoggingConfigurationLoggingDestination {
	CloudwatchLogs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code>interface{}</code> | cloudwatch_logs block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs"></a>

```go
CloudwatchLogs interface{}
```

- *Type:* interface{}

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#cloudwatch_logs PrometheusScraperLoggingConfiguration#cloudwatch_logs}

---

### PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs <a name="PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

&prometheusscraperloggingconfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs {
	LogGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#log_group_arn PrometheusScraperLoggingConfiguration#log_group_arn}. |

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn"></a>

```go
LogGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#log_group_arn PrometheusScraperLoggingConfiguration#log_group_arn}.

---

### PrometheusScraperLoggingConfigurationTimeouts <a name="PrometheusScraperLoggingConfigurationTimeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

&prometheusscraperloggingconfiguration.PrometheusScraperLoggingConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#create PrometheusScraperLoggingConfiguration#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#delete PrometheusScraperLoggingConfiguration#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/prometheus_scraper_logging_configuration#update PrometheusScraperLoggingConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList <a name="PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

prometheusscraperloggingconfiguration.NewPrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.get"></a>

```go
func Get(index *f64) PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference <a name="PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

prometheusscraperloggingconfiguration.NewPrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```go
func LogGroupArnInput() *string
```

- *Type:* *string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrometheusScraperLoggingConfigurationLoggingDestinationList <a name="PrometheusScraperLoggingConfigurationLoggingDestinationList" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

prometheusscraperloggingconfiguration.NewPrometheusScraperLoggingConfigurationLoggingDestinationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrometheusScraperLoggingConfigurationLoggingDestinationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.get"></a>

```go
func Get(index *f64) PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference <a name="PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

prometheusscraperloggingconfiguration.NewPrometheusScraperLoggingConfigurationLoggingDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs"></a>

```go
func PutCloudwatchLogs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs"></a>

```go
func ResetCloudwatchLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput"></a>

```go
func CloudwatchLogsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrometheusScraperLoggingConfigurationTimeoutsOutputReference <a name="PrometheusScraperLoggingConfigurationTimeoutsOutputReference" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/prometheusscraperloggingconfiguration"

prometheusscraperloggingconfiguration.NewPrometheusScraperLoggingConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrometheusScraperLoggingConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



