# `ephemeralAwsStsWebIdentityToken` Submodule <a name="`ephemeralAwsStsWebIdentityToken` Submodule" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsStsWebIdentityToken <a name="EphemeralAwsStsWebIdentityToken" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token aws_sts_web_identity_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsStsWebIdentityToken(Construct Scope, string Id, EphemeralAwsStsWebIdentityTokenConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig">EphemeralAwsStsWebIdentityTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig">EphemeralAwsStsWebIdentityTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetDurationSeconds">ResetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDurationSeconds` <a name="ResetDurationSeconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetDurationSeconds"></a>

```csharp
private void ResetDurationSeconds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsStsWebIdentityToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsStsWebIdentityToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsStsWebIdentityToken.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.webIdentityToken">WebIdentityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audienceInput">AudienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSecondsInput">DurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithmInput">SigningAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audience">Audience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSeconds">DurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `WebIdentityToken`<sup>Required</sup> <a name="WebIdentityToken" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.webIdentityToken"></a>

```csharp
public string WebIdentityToken { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audienceInput"></a>

```csharp
public string[] AudienceInput { get; }
```

- *Type:* string[]

---

##### `DurationSecondsInput`<sup>Optional</sup> <a name="DurationSecondsInput" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSecondsInput"></a>

```csharp
public double DurationSecondsInput { get; }
```

- *Type:* double

---

##### `SigningAlgorithmInput`<sup>Optional</sup> <a name="SigningAlgorithmInput" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithmInput"></a>

```csharp
public string SigningAlgorithmInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audience"></a>

```csharp
public string[] Audience { get; }
```

- *Type:* string[]

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSeconds"></a>

```csharp
public double DurationSeconds { get; }
```

- *Type:* double

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsStsWebIdentityTokenConfig <a name="EphemeralAwsStsWebIdentityTokenConfig" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsStsWebIdentityTokenConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string[] Audience,
    string SigningAlgorithm,
    double DurationSeconds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.audience">Audience</a></code> | <code>string[]</code> | The intended recipients of the token (populates the `aud` claim in the JWT). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | The cryptographic algorithm to use for signing the JWT. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.durationSeconds">DurationSeconds</a></code> | <code>double</code> | The duration, in seconds, for which the JWT will remain valid. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.audience"></a>

```csharp
public string[] Audience { get; set; }
```

- *Type:* string[]

The intended recipients of the token (populates the `aud` claim in the JWT).

Must contain between 1 and 10 items.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#audience EphemeralAwsStsWebIdentityToken#audience}

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; set; }
```

- *Type:* string

The cryptographic algorithm to use for signing the JWT.

Valid values are `RS256` (RSA with SHA-256) and `ES384` (ECDSA using P-384 curve with SHA-384).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#signing_algorithm EphemeralAwsStsWebIdentityToken#signing_algorithm}

---

##### `DurationSeconds`<sup>Optional</sup> <a name="DurationSeconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.durationSeconds"></a>

```csharp
public double DurationSeconds { get; set; }
```

- *Type:* double

The duration, in seconds, for which the JWT will remain valid.

Value can range from 60 to 3600 seconds. Default is 300 seconds (5 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#duration_seconds EphemeralAwsStsWebIdentityToken#duration_seconds}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}.

---



