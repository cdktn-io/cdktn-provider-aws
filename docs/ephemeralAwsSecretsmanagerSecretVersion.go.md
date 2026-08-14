# `ephemeralAwsSecretsmanagerSecretVersion` Submodule <a name="`ephemeralAwsSecretsmanagerSecretVersion` Submodule" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsSecretsmanagerSecretVersion <a name="EphemeralAwsSecretsmanagerSecretVersion" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_secret_version aws_secretsmanager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawssecretsmanagersecretversion"

ephemeralawssecretsmanagersecretversion.NewEphemeralAwsSecretsmanagerSecretVersion(scope Construct, id *string, config EphemeralAwsSecretsmanagerSecretVersionConfig) EphemeralAwsSecretsmanagerSecretVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig">EphemeralAwsSecretsmanagerSecretVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig">EphemeralAwsSecretsmanagerSecretVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionId">ResetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionStage">ResetVersionStage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionId"></a>

```go
func ResetVersionId()
```

##### `ResetVersionStage` <a name="ResetVersionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionStage"></a>

```go
func ResetVersionStage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawssecretsmanagersecretversion"

ephemeralawssecretsmanagersecretversion.EphemeralAwsSecretsmanagerSecretVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawssecretsmanagersecretversion"

ephemeralawssecretsmanagersecretversion.EphemeralAwsSecretsmanagerSecretVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawssecretsmanagersecretversion"

ephemeralawssecretsmanagersecretversion.EphemeralAwsSecretsmanagerSecretVersion_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretBinary">SecretBinary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretString">SecretString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStages">VersionStages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStageInput">VersionStageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStage">VersionStage</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `SecretBinary`<sup>Required</sup> <a name="SecretBinary" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretBinary"></a>

```go
func SecretBinary() *string
```

- *Type:* *string

---

##### `SecretString`<sup>Required</sup> <a name="SecretString" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretString"></a>

```go
func SecretString() *string
```

- *Type:* *string

---

##### `VersionStages`<sup>Required</sup> <a name="VersionStages" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStages"></a>

```go
func VersionStages() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `VersionStageInput`<sup>Optional</sup> <a name="VersionStageInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStageInput"></a>

```go
func VersionStageInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `VersionStage`<sup>Required</sup> <a name="VersionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStage"></a>

```go
func VersionStage() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsSecretsmanagerSecretVersionConfig <a name="EphemeralAwsSecretsmanagerSecretVersionConfig" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ephemeralawssecretsmanagersecretversion"

&ephemeralawssecretsmanagersecretversion.EphemeralAwsSecretsmanagerSecretVersionConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	SecretId: *string,
	Region: *string,
	VersionId: *string,
	VersionStage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.secretId">SecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_secret_version#secret_id EphemeralAwsSecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionId">VersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_secret_version#version_id EphemeralAwsSecretsmanagerSecretVersion#version_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionStage">VersionStage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_secret_version#version_stage EphemeralAwsSecretsmanagerSecretVersion#version_stage}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_secret_version#secret_id EphemeralAwsSecretsmanagerSecretVersion#secret_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_secret_version#region EphemeralAwsSecretsmanagerSecretVersion#region}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_secret_version#version_id EphemeralAwsSecretsmanagerSecretVersion#version_id}.

---

##### `VersionStage`<sup>Optional</sup> <a name="VersionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionStage"></a>

```go
VersionStage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/secretsmanager_secret_version#version_stage EphemeralAwsSecretsmanagerSecretVersion#version_stage}.

---



