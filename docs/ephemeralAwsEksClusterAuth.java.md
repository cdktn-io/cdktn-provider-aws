# `ephemeralAwsEksClusterAuth` Submodule <a name="`ephemeralAwsEksClusterAuth` Submodule" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsEksClusterAuth <a name="EphemeralAwsEksClusterAuth" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/eks_cluster_auth aws_eks_cluster_auth}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_eks_cluster_auth.EphemeralAwsEksClusterAuth;

EphemeralAwsEksClusterAuth.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .name(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/eks_cluster_auth#name EphemeralAwsEksClusterAuth#name}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/eks_cluster_auth#name EphemeralAwsEksClusterAuth#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/eks_cluster_auth#region EphemeralAwsEksClusterAuth#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.isConstruct"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_eks_cluster_auth.EphemeralAwsEksClusterAuth;

EphemeralAwsEksClusterAuth.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_eks_cluster_auth.EphemeralAwsEksClusterAuth;

EphemeralAwsEksClusterAuth.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_eks_cluster_auth.EphemeralAwsEksClusterAuth;

EphemeralAwsEksClusterAuth.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuth.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsEksClusterAuthConfig <a name="EphemeralAwsEksClusterAuthConfig" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ephemeral_aws_eks_cluster_auth.EphemeralAwsEksClusterAuthConfig;

EphemeralAwsEksClusterAuthConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .name(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/eks_cluster_auth#name EphemeralAwsEksClusterAuth#name}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/eks_cluster_auth#name EphemeralAwsEksClusterAuth#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsEksClusterAuth.EphemeralAwsEksClusterAuthConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/eks_cluster_auth#region EphemeralAwsEksClusterAuth#region}

---



