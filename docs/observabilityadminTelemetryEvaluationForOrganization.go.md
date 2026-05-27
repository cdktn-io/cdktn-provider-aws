# `observabilityadminTelemetryEvaluationForOrganization` Submodule <a name="`observabilityadminTelemetryEvaluationForOrganization` Submodule" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminTelemetryEvaluationForOrganization <a name="ObservabilityadminTelemetryEvaluationForOrganization" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization aws_observabilityadmin_telemetry_evaluation_for_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/observabilityadmintelemetryevaluationfororganization"

observabilityadmintelemetryevaluationfororganization.NewObservabilityadminTelemetryEvaluationForOrganization(scope Construct, id *string, config ObservabilityadminTelemetryEvaluationForOrganizationConfig) ObservabilityadminTelemetryEvaluationForOrganization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig">ObservabilityadminTelemetryEvaluationForOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig">ObservabilityadminTelemetryEvaluationForOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetAllRegions">ResetAllRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts"></a>

```go
func PutTimeouts(value ObservabilityadminTelemetryEvaluationForOrganizationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

---

##### `ResetAllRegions` <a name="ResetAllRegions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetAllRegions"></a>

```go
func ResetAllRegions()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegions"></a>

```go
func ResetRegions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminTelemetryEvaluationForOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/observabilityadmintelemetryevaluationfororganization"

observabilityadmintelemetryevaluationfororganization.ObservabilityadminTelemetryEvaluationForOrganization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/observabilityadmintelemetryevaluationfororganization"

observabilityadmintelemetryevaluationfororganization.ObservabilityadminTelemetryEvaluationForOrganization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/observabilityadmintelemetryevaluationfororganization"

observabilityadmintelemetryevaluationfororganization.ObservabilityadminTelemetryEvaluationForOrganization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/observabilityadmintelemetryevaluationfororganization"

observabilityadmintelemetryevaluationfororganization.ObservabilityadminTelemetryEvaluationForOrganization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ObservabilityadminTelemetryEvaluationForOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ObservabilityadminTelemetryEvaluationForOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ObservabilityadminTelemetryEvaluationForOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminTelemetryEvaluationForOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.homeRegion">HomeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference">ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegionsInput">AllRegionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegions">AllRegions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.homeRegion"></a>

```go
func HomeRegion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeouts"></a>

```go
func Timeouts() ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference">ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference</a>

---

##### `AllRegionsInput`<sup>Optional</sup> <a name="AllRegionsInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegionsInput"></a>

```go
func AllRegionsInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllRegions`<sup>Required</sup> <a name="AllRegions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegions"></a>

```go
func AllRegions() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminTelemetryEvaluationForOrganizationConfig <a name="ObservabilityadminTelemetryEvaluationForOrganizationConfig" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/observabilityadmintelemetryevaluationfororganization"

&observabilityadmintelemetryevaluationfororganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AllRegions: interface{},
	Region: *string,
	Regions: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v24.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.allRegions">AllRegions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#all_regions ObservabilityadminTelemetryEvaluationForOrganization#all_regions}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#regions ObservabilityadminTelemetryEvaluationForOrganization#regions}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllRegions`<sup>Optional</sup> <a name="AllRegions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.allRegions"></a>

```go
AllRegions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#all_regions ObservabilityadminTelemetryEvaluationForOrganization#all_regions}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#region ObservabilityadminTelemetryEvaluationForOrganization#region}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#regions ObservabilityadminTelemetryEvaluationForOrganization#regions}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.timeouts"></a>

```go
Timeouts ObservabilityadminTelemetryEvaluationForOrganizationTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#timeouts ObservabilityadminTelemetryEvaluationForOrganization#timeouts}

---

### ObservabilityadminTelemetryEvaluationForOrganizationTimeouts <a name="ObservabilityadminTelemetryEvaluationForOrganizationTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/observabilityadmintelemetryevaluationfororganization"

&observabilityadmintelemetryevaluationfororganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#create ObservabilityadminTelemetryEvaluationForOrganization#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#delete ObservabilityadminTelemetryEvaluationForOrganization#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference <a name="ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/observabilityadmintelemetryevaluationfororganization"

observabilityadmintelemetryevaluationfororganization.NewObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



