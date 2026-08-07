# `ephemeralAwsKmsSecrets` Submodule <a name="`ephemeralAwsKmsSecrets` Submodule" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsKmsSecrets <a name="EphemeralAwsKmsSecrets" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets aws_kms_secrets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ephemeralawskmssecrets"

ephemeralawskmssecrets.NewEphemeralAwsKmsSecrets(scope Construct, id *string, config EphemeralAwsKmsSecretsConfig) EphemeralAwsKmsSecrets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig">EphemeralAwsKmsSecretsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig">EphemeralAwsKmsSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSecret` <a name="PutSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret"></a>

```go
func PutSecret(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetSecret"></a>

```go
func ResetSecret()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ephemeralawskmssecrets"

ephemeralawskmssecrets.EphemeralAwsKmsSecrets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ephemeralawskmssecrets"

ephemeralawskmssecrets.EphemeralAwsKmsSecrets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ephemeralawskmssecrets"

ephemeralawskmssecrets.EphemeralAwsKmsSecrets_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.plaintext">Plaintext</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList">EphemeralAwsKmsSecretsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.plaintext"></a>

```go
func Plaintext() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secret"></a>

```go
func Secret() EphemeralAwsKmsSecretsSecretList
```

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList">EphemeralAwsKmsSecretsSecretList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsKmsSecretsConfig <a name="EphemeralAwsKmsSecretsConfig" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ephemeralawskmssecrets"

&ephemeralawskmssecrets.EphemeralAwsKmsSecretsConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Region: *string,
	Secret: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.secret">Secret</a></code> | <code>interface{}</code> | secret block. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#region EphemeralAwsKmsSecrets#region}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#secret EphemeralAwsKmsSecrets#secret}

---

### EphemeralAwsKmsSecretsSecret <a name="EphemeralAwsKmsSecretsSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ephemeralawskmssecrets"

&ephemeralawskmssecrets.EphemeralAwsKmsSecretsSecret {
	Name: *string,
	Payload: *string,
	Context: *map[string]*string,
	EncryptionAlgorithm: *string,
	GrantTokens: *[]*string,
	KeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#name EphemeralAwsKmsSecrets#name}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.payload">Payload</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#payload EphemeralAwsKmsSecrets#payload}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.context">Context</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#context EphemeralAwsKmsSecrets#context}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#encryption_algorithm EphemeralAwsKmsSecrets#encryption_algorithm}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.grantTokens">GrantTokens</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#grant_tokens EphemeralAwsKmsSecrets#grant_tokens}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.keyId">KeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#key_id EphemeralAwsKmsSecrets#key_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#name EphemeralAwsKmsSecrets#name}.

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.payload"></a>

```go
Payload *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#payload EphemeralAwsKmsSecrets#payload}.

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.context"></a>

```go
Context *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#context EphemeralAwsKmsSecrets#context}.

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.encryptionAlgorithm"></a>

```go
EncryptionAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#encryption_algorithm EphemeralAwsKmsSecrets#encryption_algorithm}.

---

##### `GrantTokens`<sup>Optional</sup> <a name="GrantTokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.grantTokens"></a>

```go
GrantTokens *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#grant_tokens EphemeralAwsKmsSecrets#grant_tokens}.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/kms_secrets#key_id EphemeralAwsKmsSecrets#key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralAwsKmsSecretsSecretList <a name="EphemeralAwsKmsSecretsSecretList" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ephemeralawskmssecrets"

ephemeralawskmssecrets.NewEphemeralAwsKmsSecretsSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EphemeralAwsKmsSecretsSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get"></a>

```go
func Get(index *f64) EphemeralAwsKmsSecretsSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EphemeralAwsKmsSecretsSecretOutputReference <a name="EphemeralAwsKmsSecretsSecretOutputReference" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/ephemeralawskmssecrets"

ephemeralawskmssecrets.NewEphemeralAwsKmsSecretsSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EphemeralAwsKmsSecretsSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetGrantTokens">ResetGrantTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContext` <a name="ResetContext" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetContext"></a>

```go
func ResetContext()
```

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm"></a>

```go
func ResetEncryptionAlgorithm()
```

##### `ResetGrantTokens` <a name="ResetGrantTokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetGrantTokens"></a>

```go
func ResetGrantTokens()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetKeyId"></a>

```go
func ResetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.contextInput">ContextInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokensInput">GrantTokensInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payloadInput">PayloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.context">Context</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokens">GrantTokens</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payload">Payload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.contextInput"></a>

```go
func ContextInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput"></a>

```go
func EncryptionAlgorithmInput() *string
```

- *Type:* *string

---

##### `GrantTokensInput`<sup>Optional</sup> <a name="GrantTokensInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokensInput"></a>

```go
func GrantTokensInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payloadInput"></a>

```go
func PayloadInput() *string
```

- *Type:* *string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.context"></a>

```go
func Context() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm"></a>

```go
func EncryptionAlgorithm() *string
```

- *Type:* *string

---

##### `GrantTokens`<sup>Required</sup> <a name="GrantTokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokens"></a>

```go
func GrantTokens() *[]*string
```

- *Type:* *[]*string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payload"></a>

```go
func Payload() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



