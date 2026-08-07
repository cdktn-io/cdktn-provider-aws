# `ephemeralAwsSecretsmanagerSecretVersion` Submodule <a name="`ephemeralAwsSecretsmanagerSecretVersion` Submodule" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsSecretsmanagerSecretVersion <a name="EphemeralAwsSecretsmanagerSecretVersion" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/secretsmanager_secret_version aws_secretsmanager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsSecretsmanagerSecretVersion(Construct Scope, string Id, EphemeralAwsSecretsmanagerSecretVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig">EphemeralAwsSecretsmanagerSecretVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionId"></a>

```csharp
private void ResetVersionId()
```

##### `ResetVersionStage` <a name="ResetVersionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionStage"></a>

```csharp
private void ResetVersionStage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsSecretsmanagerSecretVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsSecretsmanagerSecretVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsSecretsmanagerSecretVersion.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretBinary">SecretBinary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretString">SecretString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStages">VersionStages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStageInput">VersionStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStage">VersionStage</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `SecretBinary`<sup>Required</sup> <a name="SecretBinary" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretBinary"></a>

```csharp
public string SecretBinary { get; }
```

- *Type:* string

---

##### `SecretString`<sup>Required</sup> <a name="SecretString" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretString"></a>

```csharp
public string SecretString { get; }
```

- *Type:* string

---

##### `VersionStages`<sup>Required</sup> <a name="VersionStages" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStages"></a>

```csharp
public string[] VersionStages { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `VersionStageInput`<sup>Optional</sup> <a name="VersionStageInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStageInput"></a>

```csharp
public string VersionStageInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `VersionStage`<sup>Required</sup> <a name="VersionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStage"></a>

```csharp
public string VersionStage { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsSecretsmanagerSecretVersionConfig <a name="EphemeralAwsSecretsmanagerSecretVersionConfig" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsSecretsmanagerSecretVersionConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string SecretId,
    string Region = null,
    string VersionId = null,
    string VersionStage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/secretsmanager_secret_version#secret_id EphemeralAwsSecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionId">VersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/secretsmanager_secret_version#version_id EphemeralAwsSecretsmanagerSecretVersion#version_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionStage">VersionStage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/secretsmanager_secret_version#version_stage EphemeralAwsSecretsmanagerSecretVersion#version_stage}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/secretsmanager_secret_version#secret_id EphemeralAwsSecretsmanagerSecretVersion#secret_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/secretsmanager_secret_version#region EphemeralAwsSecretsmanagerSecretVersion#region}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/secretsmanager_secret_version#version_id EphemeralAwsSecretsmanagerSecretVersion#version_id}.

---

##### `VersionStage`<sup>Optional</sup> <a name="VersionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionStage"></a>

```csharp
public string VersionStage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/secretsmanager_secret_version#version_stage EphemeralAwsSecretsmanagerSecretVersion#version_stage}.

---



