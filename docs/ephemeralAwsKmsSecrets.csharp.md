# `ephemeralAwsKmsSecrets` Submodule <a name="`ephemeralAwsKmsSecrets` Submodule" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsKmsSecrets <a name="EphemeralAwsKmsSecrets" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets aws_kms_secrets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsKmsSecrets(Construct Scope, string Id, EphemeralAwsKmsSecretsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig">EphemeralAwsKmsSecretsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSecret` <a name="PutSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret"></a>

```csharp
private void PutSecret(IResolvable|EphemeralAwsKmsSecretsSecret[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetSecret"></a>

```csharp
private void ResetSecret()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsKmsSecrets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsKmsSecrets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsKmsSecrets.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.plaintext">Plaintext</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList">EphemeralAwsKmsSecretsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secretInput">SecretInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.plaintext"></a>

```csharp
public StringMap Plaintext { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secret"></a>

```csharp
public EphemeralAwsKmsSecretsSecretList Secret { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList">EphemeralAwsKmsSecretsSecretList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secretInput"></a>

```csharp
public IResolvable|EphemeralAwsKmsSecretsSecret[] SecretInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsKmsSecretsConfig <a name="EphemeralAwsKmsSecretsConfig" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsKmsSecretsConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Region = null,
    IResolvable|EphemeralAwsKmsSecretsSecret[] Secret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.secret">Secret</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]</code> | secret block. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#region EphemeralAwsKmsSecrets#region}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.secret"></a>

```csharp
public IResolvable|EphemeralAwsKmsSecretsSecret[] Secret { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#secret EphemeralAwsKmsSecrets#secret}

---

### EphemeralAwsKmsSecretsSecret <a name="EphemeralAwsKmsSecretsSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsKmsSecretsSecret {
    string Name,
    string Payload,
    System.Collections.Generic.IDictionary<string, string> Context = null,
    string EncryptionAlgorithm = null,
    string[] GrantTokens = null,
    string KeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#name EphemeralAwsKmsSecrets#name}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.payload">Payload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#payload EphemeralAwsKmsSecrets#payload}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.context">Context</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#context EphemeralAwsKmsSecrets#context}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#encryption_algorithm EphemeralAwsKmsSecrets#encryption_algorithm}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.grantTokens">GrantTokens</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#grant_tokens EphemeralAwsKmsSecrets#grant_tokens}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#key_id EphemeralAwsKmsSecrets#key_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#name EphemeralAwsKmsSecrets#name}.

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.payload"></a>

```csharp
public string Payload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#payload EphemeralAwsKmsSecrets#payload}.

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.context"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Context { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#context EphemeralAwsKmsSecrets#context}.

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#encryption_algorithm EphemeralAwsKmsSecrets#encryption_algorithm}.

---

##### `GrantTokens`<sup>Optional</sup> <a name="GrantTokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.grantTokens"></a>

```csharp
public string[] GrantTokens { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#grant_tokens EphemeralAwsKmsSecrets#grant_tokens}.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/kms_secrets#key_id EphemeralAwsKmsSecrets#key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralAwsKmsSecretsSecretList <a name="EphemeralAwsKmsSecretsSecretList" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsKmsSecretsSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get"></a>

```csharp
private EphemeralAwsKmsSecretsSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.internalValue"></a>

```csharp
public IResolvable|EphemeralAwsKmsSecretsSecret[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]

---


### EphemeralAwsKmsSecretsSecretOutputReference <a name="EphemeralAwsKmsSecretsSecretOutputReference" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsKmsSecretsSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContext` <a name="ResetContext" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm"></a>

```csharp
private void ResetEncryptionAlgorithm()
```

##### `ResetGrantTokens` <a name="ResetGrantTokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetGrantTokens"></a>

```csharp
private void ResetGrantTokens()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetKeyId"></a>

```csharp
private void ResetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.contextInput">ContextInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokensInput">GrantTokensInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payloadInput">PayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.context">Context</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokens">GrantTokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payload">Payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.contextInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ContextInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput"></a>

```csharp
public string EncryptionAlgorithmInput { get; }
```

- *Type:* string

---

##### `GrantTokensInput`<sup>Optional</sup> <a name="GrantTokensInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokensInput"></a>

```csharp
public string[] GrantTokensInput { get; }
```

- *Type:* string[]

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payloadInput"></a>

```csharp
public string PayloadInput { get; }
```

- *Type:* string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.context"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Context { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `GrantTokens`<sup>Required</sup> <a name="GrantTokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokens"></a>

```csharp
public string[] GrantTokens { get; }
```

- *Type:* string[]

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payload"></a>

```csharp
public string Payload { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EphemeralAwsKmsSecretsSecret InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>

---



