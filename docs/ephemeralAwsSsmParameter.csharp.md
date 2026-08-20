# `ephemeralAwsSsmParameter` Submodule <a name="`ephemeralAwsSsmParameter` Submodule" id="@cdktn/provider-aws.ephemeralAwsSsmParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsSsmParameter <a name="EphemeralAwsSsmParameter" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter aws_ssm_parameter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsSsmParameter(Construct Scope, string Id, EphemeralAwsSsmParameterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig">EphemeralAwsSsmParameterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig">EphemeralAwsSsmParameterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.resetWithDecryption">ResetWithDecryption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetWithDecryption` <a name="ResetWithDecryption" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.resetWithDecryption"></a>

```csharp
private void ResetWithDecryption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsSsmParameter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsSsmParameter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsSsmParameter.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.withDecryptionInput">WithDecryptionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.withDecryption">WithDecryption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `WithDecryptionInput`<sup>Optional</sup> <a name="WithDecryptionInput" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.withDecryptionInput"></a>

```csharp
public bool|IResolvable WithDecryptionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `WithDecryption`<sup>Required</sup> <a name="WithDecryption" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.withDecryption"></a>

```csharp
public bool|IResolvable WithDecryption { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsSsmParameterConfig <a name="EphemeralAwsSsmParameterConfig" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsSsmParameterConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Arn,
    string Region = null,
    bool|IResolvable WithDecryption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#arn EphemeralAwsSsmParameter#arn}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.withDecryption">WithDecryption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#with_decryption EphemeralAwsSsmParameter#with_decryption}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#arn EphemeralAwsSsmParameter#arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#region EphemeralAwsSsmParameter#region}

---

##### `WithDecryption`<sup>Optional</sup> <a name="WithDecryption" id="@cdktn/provider-aws.ephemeralAwsSsmParameter.EphemeralAwsSsmParameterConfig.property.withDecryption"></a>

```csharp
public bool|IResolvable WithDecryption { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/ssm_parameter#with_decryption EphemeralAwsSsmParameter#with_decryption}.

---



