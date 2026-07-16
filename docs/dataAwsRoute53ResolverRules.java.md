# `dataAwsRoute53ResolverRules` Submodule <a name="`dataAwsRoute53ResolverRules` Submodule" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverRules <a name="DataAwsRoute53ResolverRules" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules aws_route53_resolver_rules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_rules.DataAwsRoute53ResolverRules;

DataAwsRoute53ResolverRules.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .nameRegex(java.lang.String)
//  .ownerId(java.lang.String)
//  .region(java.lang.String)
//  .resolverEndpointId(java.lang.String)
//  .ruleType(java.lang.String)
//  .shareStatus(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.ownerId">ownerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.resolverEndpointId">resolverEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.ruleType">ruleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.shareStatus">shareStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.nameRegex"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}.

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.ownerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#region DataAwsRoute53ResolverRules#region}

---

##### `resolverEndpointId`<sup>Optional</sup> <a name="resolverEndpointId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.resolverEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}.

---

##### `ruleType`<sup>Optional</sup> <a name="ruleType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.ruleType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}.

---

##### `shareStatus`<sup>Optional</sup> <a name="shareStatus" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.shareStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOwnerId">resetOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetResolverEndpointId">resetResolverEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetRuleType">resetRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetShareStatus">resetShareStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetId"></a>

```java
public void resetId()
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetNameRegex"></a>

```java
public void resetNameRegex()
```

##### `resetOwnerId` <a name="resetOwnerId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOwnerId"></a>

```java
public void resetOwnerId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResolverEndpointId` <a name="resetResolverEndpointId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetResolverEndpointId"></a>

```java
public void resetResolverEndpointId()
```

##### `resetRuleType` <a name="resetRuleType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetRuleType"></a>

```java
public void resetRuleType()
```

##### `resetShareStatus` <a name="resetShareStatus" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetShareStatus"></a>

```java
public void resetShareStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRoute53ResolverRules resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_rules.DataAwsRoute53ResolverRules;

DataAwsRoute53ResolverRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_rules.DataAwsRoute53ResolverRules;

DataAwsRoute53ResolverRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_rules.DataAwsRoute53ResolverRules;

DataAwsRoute53ResolverRules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_rules.DataAwsRoute53ResolverRules;

DataAwsRoute53ResolverRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsRoute53ResolverRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsRoute53ResolverRules resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsRoute53ResolverRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsRoute53ResolverRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRoute53ResolverRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverRuleIds">resolverRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegexInput">nameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerIdInput">ownerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointIdInput">resolverEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleTypeInput">ruleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatusInput">shareStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointId">resolverEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatus">shareStatus</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `resolverRuleIds`<sup>Required</sup> <a name="resolverRuleIds" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverRuleIds"></a>

```java
public java.util.List<java.lang.String> getResolverRuleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegexInput"></a>

```java
public java.lang.String getNameRegexInput();
```

- *Type:* java.lang.String

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerIdInput"></a>

```java
public java.lang.String getOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resolverEndpointIdInput`<sup>Optional</sup> <a name="resolverEndpointIdInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointIdInput"></a>

```java
public java.lang.String getResolverEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleTypeInput"></a>

```java
public java.lang.String getRuleTypeInput();
```

- *Type:* java.lang.String

---

##### `shareStatusInput`<sup>Optional</sup> <a name="shareStatusInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatusInput"></a>

```java
public java.lang.String getShareStatusInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resolverEndpointId`<sup>Required</sup> <a name="resolverEndpointId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointId"></a>

```java
public java.lang.String getResolverEndpointId();
```

- *Type:* java.lang.String

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

---

##### `shareStatus`<sup>Required</sup> <a name="shareStatus" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatus"></a>

```java
public java.lang.String getShareStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverRulesConfig <a name="DataAwsRoute53ResolverRulesConfig" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_rules.DataAwsRoute53ResolverRulesConfig;

DataAwsRoute53ResolverRulesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .nameRegex(java.lang.String)
//  .ownerId(java.lang.String)
//  .region(java.lang.String)
//  .resolverEndpointId(java.lang.String)
//  .ruleType(java.lang.String)
//  .shareStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.resolverEndpointId">resolverEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.shareStatus">shareStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}.

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#region DataAwsRoute53ResolverRules#region}

---

##### `resolverEndpointId`<sup>Optional</sup> <a name="resolverEndpointId" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.resolverEndpointId"></a>

```java
public java.lang.String getResolverEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}.

---

##### `ruleType`<sup>Optional</sup> <a name="ruleType" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}.

---

##### `shareStatus`<sup>Optional</sup> <a name="shareStatus" id="@cdktn/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.shareStatus"></a>

```java
public java.lang.String getShareStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}.

---



