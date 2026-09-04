# `secretsmanagerSecretRotation` Submodule <a name="`secretsmanagerSecretRotation` Submodule" id="@cdktn/provider-aws.secretsmanagerSecretRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecretRotation <a name="SecretsmanagerSecretRotation" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/secretsmanagersecretrotation"

secretsmanagersecretrotation.NewSecretsmanagerSecretRotation(scope Construct, id *string, config SecretsmanagerSecretRotationConfig) SecretsmanagerSecretRotation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig">SecretsmanagerSecretRotationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig">SecretsmanagerSecretRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putExternalSecretRotationMetadata">PutExternalSecretRotationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putRotationRules">PutRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetExternalSecretRotationMetadata">ResetExternalSecretRotationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetExternalSecretRotationRoleArn">ResetExternalSecretRotationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotateImmediately">ResetRotateImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotationEnabled">ResetRotationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotationLambdaArn">ResetRotationLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotationRules">ResetRotationRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalSecretRotationMetadata` <a name="PutExternalSecretRotationMetadata" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putExternalSecretRotationMetadata"></a>

```go
func PutExternalSecretRotationMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putExternalSecretRotationMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRotationRules` <a name="PutRotationRules" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putRotationRules"></a>

```go
func PutRotationRules(value SecretsmanagerSecretRotationRotationRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putRotationRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

---

##### `ResetExternalSecretRotationMetadata` <a name="ResetExternalSecretRotationMetadata" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetExternalSecretRotationMetadata"></a>

```go
func ResetExternalSecretRotationMetadata()
```

##### `ResetExternalSecretRotationRoleArn` <a name="ResetExternalSecretRotationRoleArn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetExternalSecretRotationRoleArn"></a>

```go
func ResetExternalSecretRotationRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRotateImmediately` <a name="ResetRotateImmediately" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotateImmediately"></a>

```go
func ResetRotateImmediately()
```

##### `ResetRotationEnabled` <a name="ResetRotationEnabled" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotationEnabled"></a>

```go
func ResetRotationEnabled()
```

##### `ResetRotationLambdaArn` <a name="ResetRotationLambdaArn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotationLambdaArn"></a>

```go
func ResetRotationLambdaArn()
```

##### `ResetRotationRules` <a name="ResetRotationRules" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotationRules"></a>

```go
func ResetRotationRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsmanagerSecretRotation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/secretsmanagersecretrotation"

secretsmanagersecretrotation.SecretsmanagerSecretRotation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/secretsmanagersecretrotation"

secretsmanagersecretrotation.SecretsmanagerSecretRotation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/secretsmanagersecretrotation"

secretsmanagersecretrotation.SecretsmanagerSecretRotation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/secretsmanagersecretrotation"

secretsmanagersecretrotation.SecretsmanagerSecretRotation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecretsmanagerSecretRotation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecretsmanagerSecretRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecretsmanagerSecretRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecretRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.externalSecretRotationMetadata">ExternalSecretRotationMetadata</a></code> | <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList">SecretsmanagerSecretRotationExternalSecretRotationMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRules">RotationRules</a></code> | <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference">SecretsmanagerSecretRotationRotationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.externalSecretRotationMetadataInput">ExternalSecretRotationMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.externalSecretRotationRoleArnInput">ExternalSecretRotationRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediatelyInput">RotateImmediatelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationEnabledInput">RotationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArnInput">RotationLambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRulesInput">RotationRulesInput</a></code> | <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.externalSecretRotationRoleArn">ExternalSecretRotationRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediately">RotateImmediately</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationEnabled">RotationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArn">RotationLambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalSecretRotationMetadata`<sup>Required</sup> <a name="ExternalSecretRotationMetadata" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.externalSecretRotationMetadata"></a>

```go
func ExternalSecretRotationMetadata() SecretsmanagerSecretRotationExternalSecretRotationMetadataList
```

- *Type:* <a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList">SecretsmanagerSecretRotationExternalSecretRotationMetadataList</a>

---

##### `RotationRules`<sup>Required</sup> <a name="RotationRules" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRules"></a>

```go
func RotationRules() SecretsmanagerSecretRotationRotationRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference">SecretsmanagerSecretRotationRotationRulesOutputReference</a>

---

##### `ExternalSecretRotationMetadataInput`<sup>Optional</sup> <a name="ExternalSecretRotationMetadataInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.externalSecretRotationMetadataInput"></a>

```go
func ExternalSecretRotationMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalSecretRotationRoleArnInput`<sup>Optional</sup> <a name="ExternalSecretRotationRoleArnInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.externalSecretRotationRoleArnInput"></a>

```go
func ExternalSecretRotationRoleArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RotateImmediatelyInput`<sup>Optional</sup> <a name="RotateImmediatelyInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediatelyInput"></a>

```go
func RotateImmediatelyInput() interface{}
```

- *Type:* interface{}

---

##### `RotationEnabledInput`<sup>Optional</sup> <a name="RotationEnabledInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationEnabledInput"></a>

```go
func RotationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RotationLambdaArnInput`<sup>Optional</sup> <a name="RotationLambdaArnInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArnInput"></a>

```go
func RotationLambdaArnInput() *string
```

- *Type:* *string

---

##### `RotationRulesInput`<sup>Optional</sup> <a name="RotationRulesInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRulesInput"></a>

```go
func RotationRulesInput() SecretsmanagerSecretRotationRotationRules
```

- *Type:* <a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `ExternalSecretRotationRoleArn`<sup>Required</sup> <a name="ExternalSecretRotationRoleArn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.externalSecretRotationRoleArn"></a>

```go
func ExternalSecretRotationRoleArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RotateImmediately`<sup>Required</sup> <a name="RotateImmediately" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediately"></a>

```go
func RotateImmediately() interface{}
```

- *Type:* interface{}

---

##### `RotationEnabled`<sup>Required</sup> <a name="RotationEnabled" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationEnabled"></a>

```go
func RotationEnabled() interface{}
```

- *Type:* interface{}

---

##### `RotationLambdaArn`<sup>Required</sup> <a name="RotationLambdaArn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArn"></a>

```go
func RotationLambdaArn() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretRotationConfig <a name="SecretsmanagerSecretRotationConfig" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/secretsmanagersecretrotation"

&secretsmanagersecretrotation.SecretsmanagerSecretRotationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SecretId: *string,
	ExternalSecretRotationMetadata: interface{},
	ExternalSecretRotationRoleArn: *string,
	Id: *string,
	Region: *string,
	RotateImmediately: interface{},
	RotationEnabled: interface{},
	RotationLambdaArn: *string,
	RotationRules: github.com/cdktn-io/cdktn-provider-aws-go/aws/v25.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.secretId">SecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.externalSecretRotationMetadata">ExternalSecretRotationMetadata</a></code> | <code>interface{}</code> | external_secret_rotation_metadata block. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.externalSecretRotationRoleArn">ExternalSecretRotationRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#external_secret_rotation_role_arn SecretsmanagerSecretRotation#external_secret_rotation_role_arn}. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#id SecretsmanagerSecretRotation#id}. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotateImmediately">RotateImmediately</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#rotate_immediately SecretsmanagerSecretRotation#rotate_immediately}. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationEnabled">RotationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#rotation_enabled SecretsmanagerSecretRotation#rotation_enabled}. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationLambdaArn">RotationLambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationRules">RotationRules</a></code> | <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | rotation_rules block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}.

---

##### `ExternalSecretRotationMetadata`<sup>Optional</sup> <a name="ExternalSecretRotationMetadata" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.externalSecretRotationMetadata"></a>

```go
ExternalSecretRotationMetadata interface{}
```

- *Type:* interface{}

external_secret_rotation_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#external_secret_rotation_metadata SecretsmanagerSecretRotation#external_secret_rotation_metadata}

---

##### `ExternalSecretRotationRoleArn`<sup>Optional</sup> <a name="ExternalSecretRotationRoleArn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.externalSecretRotationRoleArn"></a>

```go
ExternalSecretRotationRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#external_secret_rotation_role_arn SecretsmanagerSecretRotation#external_secret_rotation_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#id SecretsmanagerSecretRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#region SecretsmanagerSecretRotation#region}

---

##### `RotateImmediately`<sup>Optional</sup> <a name="RotateImmediately" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotateImmediately"></a>

```go
RotateImmediately interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#rotate_immediately SecretsmanagerSecretRotation#rotate_immediately}.

---

##### `RotationEnabled`<sup>Optional</sup> <a name="RotationEnabled" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationEnabled"></a>

```go
RotationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#rotation_enabled SecretsmanagerSecretRotation#rotation_enabled}.

---

##### `RotationLambdaArn`<sup>Optional</sup> <a name="RotationLambdaArn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationLambdaArn"></a>

```go
RotationLambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}.

---

##### `RotationRules`<sup>Optional</sup> <a name="RotationRules" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationRules"></a>

```go
RotationRules SecretsmanagerSecretRotationRotationRules
```

- *Type:* <a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

rotation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#rotation_rules SecretsmanagerSecretRotation#rotation_rules}

---

### SecretsmanagerSecretRotationExternalSecretRotationMetadata <a name="SecretsmanagerSecretRotationExternalSecretRotationMetadata" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/secretsmanagersecretrotation"

&secretsmanagersecretrotation.SecretsmanagerSecretRotationExternalSecretRotationMetadata {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadata.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#key SecretsmanagerSecretRotation#key}. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadata.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#value SecretsmanagerSecretRotation#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadata.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#key SecretsmanagerSecretRotation#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadata.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#value SecretsmanagerSecretRotation#value}.

---

### SecretsmanagerSecretRotationRotationRules <a name="SecretsmanagerSecretRotationRotationRules" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/secretsmanagersecretrotation"

&secretsmanagersecretrotation.SecretsmanagerSecretRotationRotationRules {
	AutomaticallyAfterDays: *f64,
	Duration: *string,
	ScheduleExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.automaticallyAfterDays">AutomaticallyAfterDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#duration SecretsmanagerSecretRotation#duration}. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#schedule_expression SecretsmanagerSecretRotation#schedule_expression}. |

---

##### `AutomaticallyAfterDays`<sup>Optional</sup> <a name="AutomaticallyAfterDays" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.automaticallyAfterDays"></a>

```go
AutomaticallyAfterDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#duration SecretsmanagerSecretRotation#duration}.

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/secretsmanager_secret_rotation#schedule_expression SecretsmanagerSecretRotation#schedule_expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerSecretRotationExternalSecretRotationMetadataList <a name="SecretsmanagerSecretRotationExternalSecretRotationMetadataList" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/secretsmanagersecretrotation"

secretsmanagersecretrotation.NewSecretsmanagerSecretRotationExternalSecretRotationMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretsmanagerSecretRotationExternalSecretRotationMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.get"></a>

```go
func Get(index *f64) SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference <a name="SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/secretsmanagersecretrotation"

secretsmanagersecretrotation.NewSecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationExternalSecretRotationMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretsmanagerSecretRotationRotationRulesOutputReference <a name="SecretsmanagerSecretRotationRotationRulesOutputReference" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/secretsmanagersecretrotation"

secretsmanagersecretrotation.NewSecretsmanagerSecretRotationRotationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretsmanagerSecretRotationRotationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetAutomaticallyAfterDays">ResetAutomaticallyAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutomaticallyAfterDays` <a name="ResetAutomaticallyAfterDays" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetAutomaticallyAfterDays"></a>

```go
func ResetAutomaticallyAfterDays()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetScheduleExpression"></a>

```go
func ResetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDaysInput">AutomaticallyAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays">AutomaticallyAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticallyAfterDaysInput`<sup>Optional</sup> <a name="AutomaticallyAfterDaysInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDaysInput"></a>

```go
func AutomaticallyAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `AutomaticallyAfterDays`<sup>Required</sup> <a name="AutomaticallyAfterDays" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```go
func AutomaticallyAfterDays() *f64
```

- *Type:* *f64

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretsmanagerSecretRotationRotationRules
```

- *Type:* <a href="#@cdktn/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

---



