# `dataAwsRoute53ResolverQueryLogConfig` Submodule <a name="`dataAwsRoute53ResolverQueryLogConfig` Submodule" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverQueryLogConfig <a name="DataAwsRoute53ResolverQueryLogConfig" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config aws_route53_resolver_query_log_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_query_log_config.DataAwsRoute53ResolverQueryLogConfig;

DataAwsRoute53ResolverQueryLogConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsRoute53ResolverQueryLogConfigFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .resolverQueryLogConfigId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#id DataAwsRoute53ResolverQueryLogConfig#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.resolverQueryLogConfigId">resolverQueryLogConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#resolver_query_log_config_id DataAwsRoute53ResolverQueryLogConfig#resolver_query_log_config_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#tags DataAwsRoute53ResolverQueryLogConfig#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#filter DataAwsRoute53ResolverQueryLogConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#id DataAwsRoute53ResolverQueryLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#region DataAwsRoute53ResolverQueryLogConfig#region}

---

##### `resolverQueryLogConfigId`<sup>Optional</sup> <a name="resolverQueryLogConfigId" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.resolverQueryLogConfigId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#resolver_query_log_config_id DataAwsRoute53ResolverQueryLogConfig#resolver_query_log_config_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#tags DataAwsRoute53ResolverQueryLogConfig#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetResolverQueryLogConfigId">resetResolverQueryLogConfigId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsRoute53ResolverQueryLogConfigFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResolverQueryLogConfigId` <a name="resetResolverQueryLogConfigId" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetResolverQueryLogConfigId"></a>

```java
public void resetResolverQueryLogConfigId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRoute53ResolverQueryLogConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_query_log_config.DataAwsRoute53ResolverQueryLogConfig;

DataAwsRoute53ResolverQueryLogConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_query_log_config.DataAwsRoute53ResolverQueryLogConfig;

DataAwsRoute53ResolverQueryLogConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_query_log_config.DataAwsRoute53ResolverQueryLogConfig;

DataAwsRoute53ResolverQueryLogConfig.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_query_log_config.DataAwsRoute53ResolverQueryLogConfig;

DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsRoute53ResolverQueryLogConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsRoute53ResolverQueryLogConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsRoute53ResolverQueryLogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRoute53ResolverQueryLogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList">DataAwsRoute53ResolverQueryLogConfigFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.shareStatus">shareStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.resolverQueryLogConfigIdInput">resolverQueryLogConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.resolverQueryLogConfigId">resolverQueryLogConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.filter"></a>

```java
public DataAwsRoute53ResolverQueryLogConfigFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList">DataAwsRoute53ResolverQueryLogConfigFilterList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `shareStatus`<sup>Required</sup> <a name="shareStatus" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.shareStatus"></a>

```java
public java.lang.String getShareStatus();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsRoute53ResolverQueryLogConfigFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resolverQueryLogConfigIdInput`<sup>Optional</sup> <a name="resolverQueryLogConfigIdInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.resolverQueryLogConfigIdInput"></a>

```java
public java.lang.String getResolverQueryLogConfigIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resolverQueryLogConfigId`<sup>Required</sup> <a name="resolverQueryLogConfigId" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.resolverQueryLogConfigId"></a>

```java
public java.lang.String getResolverQueryLogConfigId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverQueryLogConfigConfig <a name="DataAwsRoute53ResolverQueryLogConfigConfig" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_query_log_config.DataAwsRoute53ResolverQueryLogConfigConfig;

DataAwsRoute53ResolverQueryLogConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsRoute53ResolverQueryLogConfigFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .resolverQueryLogConfigId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#id DataAwsRoute53ResolverQueryLogConfig#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.resolverQueryLogConfigId">resolverQueryLogConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#resolver_query_log_config_id DataAwsRoute53ResolverQueryLogConfig#resolver_query_log_config_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#tags DataAwsRoute53ResolverQueryLogConfig#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsRoute53ResolverQueryLogConfigFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#filter DataAwsRoute53ResolverQueryLogConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#id DataAwsRoute53ResolverQueryLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#region DataAwsRoute53ResolverQueryLogConfig#region}

---

##### `resolverQueryLogConfigId`<sup>Optional</sup> <a name="resolverQueryLogConfigId" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.resolverQueryLogConfigId"></a>

```java
public java.lang.String getResolverQueryLogConfigId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#resolver_query_log_config_id DataAwsRoute53ResolverQueryLogConfig#resolver_query_log_config_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#tags DataAwsRoute53ResolverQueryLogConfig#tags}.

---

### DataAwsRoute53ResolverQueryLogConfigFilter <a name="DataAwsRoute53ResolverQueryLogConfigFilter" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_query_log_config.DataAwsRoute53ResolverQueryLogConfigFilter;

DataAwsRoute53ResolverQueryLogConfigFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#values DataAwsRoute53ResolverQueryLogConfig#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/route53_resolver_query_log_config#values DataAwsRoute53ResolverQueryLogConfig#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53ResolverQueryLogConfigFilterList <a name="DataAwsRoute53ResolverQueryLogConfigFilterList" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_query_log_config.DataAwsRoute53ResolverQueryLogConfigFilterList;

new DataAwsRoute53ResolverQueryLogConfigFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.get"></a>

```java
public DataAwsRoute53ResolverQueryLogConfigFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsRoute53ResolverQueryLogConfigFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>>

---


### DataAwsRoute53ResolverQueryLogConfigFilterOutputReference <a name="DataAwsRoute53ResolverQueryLogConfigFilterOutputReference" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_route53_resolver_query_log_config.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference;

new DataAwsRoute53ResolverQueryLogConfigFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsRoute53ResolverQueryLogConfigFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>

---



